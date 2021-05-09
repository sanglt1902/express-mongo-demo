# Create Node.js App
**First, we create a folder:**

```js
$ mkdir nodejs-express-mongodb
$ cd nodejs-express-mongodb
```

**Next, we initialize the Node.js App with a package.json file:**

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

**We need to install necessary modules: express, mongoose, body-parser and cors.
Run the command:**

```js
yarn install express mongoose body-parser cors --save
```

Install nodemon auto re-run your app when the app has any changing

```js
yarn add nodemon --dev
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