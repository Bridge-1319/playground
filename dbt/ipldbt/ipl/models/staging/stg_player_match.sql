WITH

source AS (
    SELECT * FROM {{ source('ipl','player_match') }}
),


renamed AS(
    SELECT
        match_id,
        player_id,
        team_id,
        is_keeper,
        is_captain
    FROM
        source
)

SELECT * FROM renamed;