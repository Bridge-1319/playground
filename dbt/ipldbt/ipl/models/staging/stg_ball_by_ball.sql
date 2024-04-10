-- Define source data
WITH source AS (
    SELECT * FROM {{ source('ipl','ball_by_ball') }}
),

-- Transform source data
transformed AS (
    SELECT
        match_id,
        innings_id,
        over_id,
        ball_id,
        team_batting_id,
        team_bowling_id,
        striker_id,
        striker_batting_position,
        non_striker_id,
        bowler_id,
        CASE WHEN ISNUMERIC(batsman_scored) = 1 THEN CONVERT(INT, batsman_scored) ELSE 0 END AS batsman_scored,
        extra_type,
        COALESCE(extra_runs, 0) AS extra_runs,
        player_dissimal_id,
        COALESCE(REPLACE(dissimal_type, ' ', '_'), 'na') AS dissimal_type,
        fielder_id
    FROM
        source
)

-- Select transformed data
SELECT * FROM transformed;
