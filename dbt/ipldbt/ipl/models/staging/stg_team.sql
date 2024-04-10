-- This model selects specific columns from the team table
-- and stages the data for further transformations

WITH source AS (
    SELECT * FROM {{ source('ipl', 'team') }}
),

team_staging AS (
    SELECT
        team_id,
        team_name,
        team_short_code
    FROM source
)

SELECT
    team_id,
    team_name,
    team_short_code
FROM team_staging;
