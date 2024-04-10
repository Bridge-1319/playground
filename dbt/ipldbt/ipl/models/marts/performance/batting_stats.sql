{{ config(materialized="view") }}

WITH each_ball AS (
    SELECT * FROM {{ ref('stg_ball_by_ball') }}
),

player_batting_stats AS (
    SELECT
        striker_id,
        SUM(batsman_scored) AS runs_scored,
        COUNT(1) AS balls_played
    FROM
        each_ball
    GROUP BY
        striker_id
        
),

stats_per_match AS (
    SELECT
        match_id,
        striker_id,
        SUM(batsman_scored) AS runs
    FROM
        each_ball
    GROUP BY
        match_id,
        striker_id
),

player_performance_per_match AS (
    SELECT
        striker_id,
        SUM(CASE WHEN runs >= 100 THEN 1 ELSE 0 END) AS hundreds,
        SUM(CASE WHEN runs >= 50 THEN 1 ELSE 0 END) AS fifties
    FROM 
        stats_per_match
    GROUP BY
        striker_id
),

match_played AS (
    SELECT 
        striker_id,
        COUNT(DISTINCT match_id) AS match_played
    FROM
        each_ball
    GROUP BY
        striker_id
),

all_players AS (
    SELECT * FROM {{ ref('stg_player') }}
),

final_table AS (
    SELECT 
        pl.player_id,
        pl.player_name, 
        pbs.runs_scored, 
        pbs.balls_played, 
        pppm.hundreds, 
        pppm.fifties, 
        ma.match_played,
        -- Calculate striker rate
        CASE 
            WHEN pbs.balls_played > 0 THEN ROUND(pbs.runs_scored * 100.0 / pbs.balls_played, 2) 
            ELSE 0 
        END AS striker_rate,
        -- Calculate average
        CASE 
            WHEN pbs.balls_played > 0 THEN ROUND(pbs.runs_scored * 1.0 / ma.match_played, 2) 
            ELSE 0 
        END AS average
    FROM
        all_players pl
    LEFT JOIN
        match_played ma ON pl.player_id = ma.striker_id
    LEFT JOIN
        player_performance_per_match pppm ON pppm.striker_id = pl.player_id
    LEFT JOIN
        player_batting_stats pbs ON pbs.striker_id = pl.player_id
)

SELECT * FROM final_table;
