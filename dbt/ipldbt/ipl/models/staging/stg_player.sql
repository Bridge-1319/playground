-- This model selects specific columns from the player table
-- and stages the data for further transformations

WITH source AS (
    SELECT * FROM {{ source('ipl', 'player') }}
),

player_staging AS (
    SELECT
        player_id,
        player_name,
        dob,
        batting_hand,
        bowling_skill,
        country,
        is_umpire
    FROM source
)

SELECT
    *
FROM 
    player_staging;
