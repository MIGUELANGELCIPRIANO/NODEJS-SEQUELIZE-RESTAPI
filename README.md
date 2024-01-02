# NODEJS-SEQUELIZE-RESTAPI

<img width="50%" src="https://i.postimg.cc/C5y1j08k/SEQUELIZE-REST-API.jpg" />

## INTRODUCCIÓN

En este proyecto crearemos una REST API de **Node.js** utilizando **Sequelize**, como ORM, y **PostgreSQL**, como base de datos relacional, para la ejecución de consultas y creación de tablas.
La REST API tendrá un endpoint de proyectos y cada proyecto a sus vez constará de diferentes tareas, estableciendo una relación de uno a muchos (1:N).
Dicho proyecto tiene el objetivo de entender el funcionamiento básico de **Sequelize**, creación de rutas, CRUD (CREATE, READ, UPDATE, DELETE) y conexión con una base de datos relacional.

## TECNOLOGÍAS

- Node.js
- Sequelize
- Express.js
- PostgreSQL

## INSTALACIÓN

1. Instalar **Node.js**.
2. Instalar **PostgreSQL**.
3. Crear una base de datos con el nombre `proyectsdb`.
4. Crear un archivo .env dentro de ./NODEJS-SEQUELIZE-RESTAPI y reemplazar `usuariopostgres` y `passwordpostgres` con sus credenciales.

```js
DB_NAME = proyectsdb
DB_USER = usuariopostgres
DB_PASSWORD = passwordpostgres
```

5. Utilizar el administrador de paquetes **npm** para instalar.
6. Ejecutar el comando desde la terminal ubicado en ./NODEJS-SEQUELIZE-RESTAPI.

```shell
npm i
```

## EJECUCIÓN

Ejecutar el comando desde la terminal ubicado en ./NODEJS-SEQUELIZE-RESTAPI.

```shell
npm run dev
```
