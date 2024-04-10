WITH 

each_ball AS (
    SELECT * FROM {{ ref('stg_ball_by_ball') }}
),

fielder_count AS (
    SELECT 
        fielder_id, COUNT(1) as assist
    FROM
        each_ball
    WHERE 
        fielder_id IS NOT NULL
    GROUP BY
        fielder_id
),


all_players AS (
    SELECT * FROM {{ ref('stg_player') }}
),



final AS (
    SELECT 
        pl.player_id, pl.player_name, fc.assist
    FROM
        all_players pl
    LEFT JOIN
        fielder_count fc ON fc.fielder_id = pl.player_id
)


SELECT * FROM final;
