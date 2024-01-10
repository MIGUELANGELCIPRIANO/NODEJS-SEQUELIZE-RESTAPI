# NODEJS-SEQUELIZE-RESTAPI

<img width="50%" src="https://i.postimg.cc/C5y1j08k/SEQUELIZE-REST-API.jpg" />

## INTRODUCTION

In this project we will create a **Node.js** REST API using **Sequelize**, as ORM, and **PostgreSQL**, as relational database, for query execution and table creation.
The REST API will have a project endpoint and each project in turn will consist of different tasks, establishing a one-to-many (1:N) relationship.
This project aims to understand the basic operation of **Sequelize**, route creation, CRUD (CREATE, READ, UPDATE, DELETE) and connection to a relational database.

<img width="50%" src="https://i.postimg.cc/Fsk85772/PROJECTSDB-ERD.jpg" >

## TECHNOLOGIES

- Node.js
- Sequelize
- Express.js
- PostgreSQL

## INSTALLATION

1. Install **Node.js**.
2. Install **PostgreSQL**.
3. Create a database with the name `projectsdb`.
4. Create an .env file inside ./NODEJS-SEQUELIZE-RESTAPI and replace `userpostgres` and `passwordpostgres` with your credentials.

```js
DB_NAME = projectsdb
DB_USER = userpostgres
DB_PASSWORD = passwordpostgres
```

5. Use the **npm** package manager to install.
6. Execute the command from the terminal located in ./NODEJS-SEQUELIZE-RESTAPI.

```shell
npm i
```

## EXECUTION

Execute the command from the terminal located in ./NODEJS-SEQUELIZE-RESTAPI.

```shell
npm run dev
```
