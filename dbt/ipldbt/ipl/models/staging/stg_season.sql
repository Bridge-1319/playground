
-- This model selects specific columns from the season table
-- and stages the data for further transformations

WITH source AS (
    SELECT * FROM {{ source('ipl', 'season') }}
),

season_staging AS (
    SELECT
        season_id,
        season_year,
        orange_cap_id,
        purple_cap_id,
        man_of_the_series_id
    FROM source
)

SELECT
    season_id,
    season_year,
    orange_cap_id,
    purple_cap_id,
    man_of_the_series_id
FROM season_staging;
