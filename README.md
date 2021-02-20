# Udagram Image Filtering Microservice

GitHub Actions ![Continuous Integration and Delivery](https://github.com/marcusholmgren/udagram/workflows/Continuous%20Integration%20and%20Delivery/badge.svg)

Travis CI - Docker build [![Build Status](https://travis-ci.org/marcusholmgren/udagram.svg?branch=develop)](https://travis-ci.org/marcusholmgren/udagram)

Udacity - Cloud Developer Nanodegree Program


## Architectural decision are recorded
Architectural Decision Records [ADR](./docs/README.md) for this microservice architecture are located in the `/docs` folder.

Monorepo folder structure:
* [proxy-api/](/proxy-api/README.md) - contains a reverse proxy for the REST API of the Udagram application
* [feed-api/](/feed-api/README.md) - contains an REST API for the Udagram Feed application
* [user-api/](/user-api/README.md) - contains an REST API for the Udagram Users application
* [image_filtering/](/image_filtering/README.md) - contains an image filtering service

## Run the server

These projects uses [NodeJS](https://nodejs.org/en/)

Open a terminal and navigate into the root of your clone of this repository.

1. `cd image_filtering/` - navigate to folder for backend server
2. `npm i` - installs the required dependencies
3. `npm run dev` - starts the development server

## Postman REST collection

The `cloud-cdnd-c2-final.postman_collection.json` contains sample REST request for interacting with the image filtering microservice.


## Run the frontend

Build the client as a Docker image with the tag `udagram-client`
1. `cd frontend`
2. `docker build -t udagram-client .`

Run the frontend client with command:  
`docker run -p 8100:80 udagram-client`

## Docker Compose

The easiest way to run this application locally is with Docker Compose.
Given that you have Docker installed with Docker Compose.

1. Start

```
docker-compose up -d
```

2. Stop

```
docker-compose stop
```

3. Remove containers

```
docker-compose rm
```


## Kubernetes

Change directory to the `kubernetes/` folder. `cd kubernetes`

Then run the `deploy.sh` script to create all the Kubernetes pods from the Deployment and Service YAML files.
```
. ./deploy.sh
```

Delete all Kubernetes pods created with Deployment and Service YAML files.
```
. ./destroy.sh
```

## Screenshots

See the [screenshots](./screenshots/README.md) folder for images from my implementation of the project specification .
