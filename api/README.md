# NightFall API

## Technical stack

This API uses **NodeJS** with the **Express** framework for the server. The used language is **Typescript**.

## Prerequisites

-   NodeJS >= 12.0
-   MongoDB Server >= 4.2.0

## Install & Deploy

(Assuming you are in the api folder of the project).

### Environment variables

The project environment variables are defined in a .env file. A default file with the required values is available : _.env.default_.
You need to copy it :

```shell
cp .env.default .env
```

You can now change the values in the _.env_.

### Installation

You have to download all libraries.

```shell
npm install
```

## Run the application

You can run the application executing :

```shell
npm run dev
```

## Base values

You can insert base values in the database executing the command

```shell
npm run seeds
```

## Mocks

You can insert mocks in the database executing the command

```shell
npm run fakes
```

# Deploy with docker

You can execute in a docker container with the following commands :

```shell
docker build -t node-restapi .
docker run -p 3000:3000 node-restapi
```

# Play with

You can now play with the API, calling it in the port 3000 (By default).
