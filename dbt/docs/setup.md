1. Download sql server, ssms and odbc
2. Profiles.yaml in .dbt folder or you can create directly into the folder
    - https://www.youtube.com/watch?v=Pa92VAS2m1A
    - dbt debug --profiles-dir="."
3. dbt debug to check connection
4. make sure to use two sql commands!
    - SELECT @@SERVERNAME;
    - CREATE DATABASE demo;


5. use `dbt seed` to seed the csvs in the schema of your database.
