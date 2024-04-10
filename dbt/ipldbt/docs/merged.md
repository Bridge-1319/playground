dbt default creation view can be changed:
    either -> dbt_project.yml
    or at file level -> {{ config(materialized:'table') }}

![](images/2024-03-10-10-58-47.png)

![](images/2024-03-10-10-59-22.png)


## Source
Should be loaded using fivertan or stitch or some manual
orchestration
![](images/2024-03-10-12-35-34.png)

## Staging Model
Light Touch 
![](images/2024-03-10-12-36-05.png)


## Intermediate model
Should only reference stagin model | Fact model
![](images/2024-03-10-12-36-24.png)

## Fact Model Long Table
![](images/2024-03-10-12-38-32.png)

## Dimension Model
![](images/2024-03-10-12-38-51.png)