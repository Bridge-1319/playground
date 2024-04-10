WITH each_ball AS (
    SELECT * FROM {{ ref('stg_ball_by_ball') }}
),

each_over AS (
    SELECT 
        bowler_id,
        match_id,
        over_id,
        SUM(
            CASE 
                WHEN dissimal_type NOT IN ('na','obstructing_the_field', 'retired_hurt', 'run_out') THEN 1 
                ELSE 0 
            END
        ) as wicket_per_over,
        COUNT(*) as ball_per_over,
        SUM(batsman_scored + extra_runs) as run_given_per_over
    FROM
        each_ball
    GROUP BY
        bowler_id,
        match_id,
        over_id
),

each_match AS (
    SELECT
        bowler_id,
        match_id,
        SUM(wicket_per_over) as wicket_per_match,
        SUM(ball_per_over) as ball_per_match,
        SUM(run_given_per_over) as runs_per_match,
        COUNT(DISTINCT over_id) as overs
    FROM
        each_over
    GROUP BY
        bowler_id,
        match_id
),

total_wickets AS (
    SELECT 
        bowler_id,
        SUM(wicket_per_match) as total_wickets,
        SUM(ball_per_match) as total_balls,
        SUM(runs_per_match) as total_runs,
        COUNT(overs) as overs
    FROM
        each_match
    GROUP BY
        bowler_id
),

all_players AS (
    SELECT * FROM {{ ref('stg_player') }}
),

match_played AS (
    SELECT 
        bowler_id,
        COUNT(DISTINCT match_id) AS match_played
    FROM
        each_ball
    GROUP BY
        bowler_id
),

final AS (
    SELECT 
        pl.player_id,
        pl.player_name,
        tw.total_wickets,
        tw.total_runs,
        tw.overs,
        ma.match_played,
        tw.total_runs * 6.0 / tw.total_balls AS economy, -- Calculate economy
        CASE 
            WHEN tw.total_balls > 0 THEN ROUND((tw.total_wickets * 6.0 / tw.total_balls), 2) * 100 -- Calculate strike rate and round to 2 decimal places
            ELSE 0
        END AS strike_rate -- Calculate strike rate
    FROM
        all_players pl
    LEFT JOIN
        total_wickets tw ON tw.bowler_id = pl.player_id
    LEFT JOIN
        match_played ma ON ma.bowler_id = pl.player_id
)


SELECT * FROM final;
