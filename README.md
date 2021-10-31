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

## Regarding Frontend and Backend Integration
Integration was done following the instructions presented here: https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react
Essentially, the application functions as a typical react app, where to run it you need to go to the my-app subdirectory and execute:
 ```
 npm start
 ```
Note that you might also need to install the dependencies listed in NPM_Requirements.txt. 

From here, current integration allows for you to add /api/volunteers, /api/organizations and /api/events to the 
server ending (eg: localhost:3000/api/x) to view the django models directly through the frontend. 
Have also configured the react app to proxy API requests to the Django database, but without forms have not implemented yet.

Summary: Run as React Application with npm start, can configure models from frontend via /api/x.