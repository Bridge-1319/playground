WITH

source AS (
    SELECT * FROM {{ source('ipl','match') }}
),

transformed_match AS (
    SELECT 
        match_id,
        match_date,
        team_name_id,
        opponent_team_id,
        season_id,
        venue_name,
        toss_winner_id,
        toss_decision,
        is_superover,
        is_result,
        is_duckworthlewis,
        win_type,
        won_by,
        match_winner_id,
        man_of_the_match_id,
        first_umpire_id,
        second_umpire_id,
        city_name,
        host_country
    FROM
        source
)

SELECT * FROM transformed_match