# Volunteer and You

DECO3801 project

It is recommended to create a virtual environment (For Development Process):
```
  py -m venv <environment name>
```

To Install python dependencies in requirements.txt execute:
```
  pip install -r requirements.txt
```

## For Development Process 

### SuperUser has been created. Credentials:
  
  ```
  Username : admin
  Password : admin
  ```
  
  To access the models on website, run the server locally:
  ```
  py manage.py runserver
  ```

 Go to the url shown + /admin and add the details

## In Regards to SQL Integration

The main feature of this branch is that instead of being configured to a local sqlite server,
the application is linked to the UQZone MySQL database. As such, for now at least, we keep this
branch seperate from main as a deployment branch, only merging into this when wanting to test 
functionality against remote hosting. For local testing/dev, other branches should be used.