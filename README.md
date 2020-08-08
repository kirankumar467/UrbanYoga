# UrbanYoga

## Prerequisites
latest version of npm. mongodb

## To Run Angular Development server
1. Go to check out location and run the below command , this will download required libraries for the project.

  ### UrbanYoga> npm install --save-dev

2. To start the dev serve

  #### UrbanYoga> npm start 

  It will start the devlopment server on 4200. Start using by below URL.
  URL: http://localhost:4200/


## To Run node rest server
1. Mavigate to restservices folder from root folder and install npm packages.
  
  ### UrbanYoga/restservices> npm install --save-dev

2. start the rest server from restservices folder or project root folder.

  ### UrbanYoga/restservices> npm start 

  or 

  ### UrbanYoga> npm start:restservice

  It will start the rest server on 8081.

# Note: After starting the rest server use REST client to send POST request to insert the records into DB.
  
  http://localhost:8081/businessoverview/create (Reqest Type: POST)

  Then Start using the angular application to see the results
