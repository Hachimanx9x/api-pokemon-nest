## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## rutes

```bash
# GET pokemon default limit 6
 /pokemon/
 # GET all pokemon
 /pokemon/all
 # GET single pokemon
 /pokemon/single?id=1
 # GET next 6 pokemons
 /pokemon/next?next=6
 #POST
 # {
 #   "type":"Planta", "weakness":"Fuego","heigth":[0.1,20], "weight":[0.1,999.9],"ranges": [1,989]
 # }
 /pokemon/filter
```
