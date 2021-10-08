# How to install and run locally

* Clone this repo, use this command:

    `git clone <link>`
* Install all node package in this project, use this command in this project's root directory:
  
    `npm install`
* create `.env` file in this project's root directory.
* run your local mysql server.
* create new database in mysql with name `db_backendtes`
* copy this text below to your `.env` file:

    ```
    DEV_DB_NAME=db_backendtes
    DEV_DB_HOST=localhost
    DEV_DB_PORT=3306
    DEV_DB_USERNAME=root
    DEV_DB_PASSWORD=
    ```
* Configure all the variable in `.env` file with your local environtment.
* Run the database migration, use this command:
  
  `npx sequelize-cli db:migrate`
* Run the database seeder, use this command:
  
  `npx sequlize-cli db:seed:all`
* Run the server, use this command:
  
  `npm start`
* Now the project is running in your local machine.

---

## Route
* To get all recipe in list:
  
  `/recipe/all` with GET method
* To add new recipe:
  
  `/recipe/add` with POST method
* To add new ingredient:
  
  `/ingredient/add` with POST method
* To add new step:
  
  `/step/add/:recipeId` with POST method

---

## Postman

You can easily test this project API by import this Json postman collection below:
[https://www.getpostman.com/collections/475719e6c00df1337051]