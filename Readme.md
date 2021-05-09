# Create Node.js App
First, we create a folder:

```js
$ mkdir nodejs-express-mongodb
$ cd nodejs-express-mongodb
```

Next, we initialize the Node.js App with a package.json file:

```js
yarn init

name: (nodejs-express-mongodb)
version: (1.0.0)
description: Node.js Restful CRUD API with Node.js, Express and MongoDB
entry point: (index.js) server.js
test command:
git repository:
keywords: nodejs, express, mongodb, rest, api
author: Sang Lai
license: (ISC)

Is this ok? (yes) yes
```

We need to install necessary modules: express, mongoose, body-parser and cors. Run the command:

```js
yarn install express mongoose body-parser cors --save
```

Install nodemon auto re-run your app when the app has any changing

```js
yarn add nodemon --dev
```

Use .env file

```js
yarn add dotevn
```

To run app

```js
yarn start
```
or
```js
npm start
```

# Folder Structure

```
project
│   README.md
│   server.js
│   .env
│   package.json
│   docker-compose.yml
│
└───src
    │
    └───config
    │      db.config.js
    │      ...
    │
    └───controllers
    │      product.controller.js
    │      ...
    │
    └───models
    │      product.model.js
    │      ...
    │
    └───repositories
    │      product.repository.js
    │      ...
    │
    └───services
    │      product.service.js
    │      ...
    │
    └───routes
    │      product.route.js
    │      ...
    └───-------------------
```

# Docker compose file

```yml
version: "3.7"
services:
  mongodb:
    container_name: mongodb
    image: mongo
    volumes:
      - ./data:/data/db
      - ./.docker/init:/docker-entrypoint-initdb.d
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_DATABASE=demodb
      - MONGO_INITDB_ROOT_PASSWORD=example
    ports:
      - '27017:27017'
  mongo-express:
    container_name: mongo-express
    image: mongo-express
    depends_on:
      - mongodb
    environment:
      - ME_CONFIG_MONGODB_ADMINUSERNAME=root
      - ME_CONFIG_MONGODB_ADMINPASSWORD=example
      - ME_CONFIG_MONGODB_SERVER=mongodb
      - ME_CONFIG_BASICAUTH_USERNAME=test
      - ME_CONFIG_BASICAUTH_PASSWORD=example
    ports:
      - '8081:8081'
```

# Docker comments

To run docker compose file as above run this command:

```js
docker-compose up
```

To run this command in background

```js
docker-compose up -d
```

To stop docker compose
```js
docker-compose down
```


For more docker commands please take a look the cheat sheet [here](https://raw.githubusercontent.com/sangam14/dockercheatsheets/master/dockercheatsheet8.png)


# RESTFUL APIs

**`GET`** to retrieve a resource;
**`PUT`** to change the state of or update a resource which can be an object, file or block;
**`POST`** to create that resource; and
**`DELETE`** to remove it.
**`PATCH`** is used when you want to apply a partial update to the resource

# MongoDB Connection String

```js
mongodb://<db_username>:<db_password>@<your_domain>:<port>/<db_name>?authSource=admin
````

For this project:

```js
mongodb://root:example@localhost:27017/demodb?authSource=admin
```

# Application data flow

```sequence
Client ->Controller: createProduct()
Note right of Client: send a request to create a Product
Controller->Service: createProduct()
Service-> Repository: saveProduct()
Repository-> MongoDb: save
MongoDb -> Repository:return new product
Note left of MongoDb: retrieve data from DB
Repository->Service:  return new product
Service ->Controller: return new product
Controller->Client: return a product
Note left of Controller: return a product already created
```