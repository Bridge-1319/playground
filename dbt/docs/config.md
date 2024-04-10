```yaml
dbtbigquery:
  outputs:
    dev:
      dataset: L3_CONSUMPTION
      job_execution_timeout_seconds: 300
      job_retries: 1
      keyfile: C:\Users\vikas\Desktop\dbt_workspace\keyfile.json
      location: US
      method: service-account
      priority: interactive
      project: chatbot-365210
      threads: 4
      type: bigquery
  target: dev
```

```yml
ipl:
  target: demo1
  outputs:
    demo1:
      type: sqlserver
      driver: 'ODBC Driver 18 for SQL Server' # (The ODBC Driver installed on your system)
      server: LAPTOP-RKFE274I
      database: ipl
      schema: dbo
      windows_login: True
      trust_cert: True
      # user:
      # password:
```

