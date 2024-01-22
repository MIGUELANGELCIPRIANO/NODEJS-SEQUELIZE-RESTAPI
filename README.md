# NODEJS-SEQUELIZE-RESTAPI

<img width="50%" src="https://i.postimg.cc/7YnQx7K4/SEQUELIZE-REST-API.png" />

## INTRODUCTION

In this project we will create a **Node.js** REST API using **Sequelize**, as ORM, and **PostgreSQL**, as relational database, for query execution and table creation. <br>
The REST API will have a project endpoint and each project in turn will consist of different tasks, establishing a one-to-many (1:N) relationship. <br>
This project aims to understand the basic operation of **Sequelize**, route creation, CRUD (CREATE, READ, UPDATE, DELETE) and connection to a relational database.

## TECHNOLOGIES

- Node.js
- Sequelize
- Express.js
- PostgreSQL

## INSTALLATION

1. Install the recommended version for most users of **Node.js** from the following link.

https://nodejs.org/en

2. Install the latest stable version of **PostgreSQL** from the following link.

https://www.postgresql.org/

3. Use the **npm** package manager to install.
4. Execute the command from the terminal located at ./NODEJS-SEQUELIZE-RESTAPI.

```shell
npm i
```

5. Create a database with the name `projectsdb`.
6. Create an .env file inside ./NODEJS-SEQUELIZE-RESTAPI and replace `userpostgres` and `passwordpostgres` with your credentials.

```js
DB_NAME = projectsdb
DB_USER = userpostgres
DB_PASSWORD = passwordpostgres
```

## EXECUTION

7. Use the **npm** package manager to run.
8. Execute the command from the terminal located at ./NODEJS-SEQUELIZE-RESTAPI.

```shell
npm run dev
```
