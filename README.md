# Udagram Image Filtering Microservice
![Continuous Integration and Delivery](https://github.com/marcusholmgren/udagram/workflows/Continuous%20Integration%20and%20Delivery/badge.svg)

Udacity - Cloud Developer Nanodegree Program

## Architectural decision are recorded
Architectural Decision Records [ADR](./docs/README.md) for this microservice architecture are located in the `/docs` folder.

Folder structure:
* [image_filtering/](/image_filtering/README.md) - contains a image filtering service

## Run the server

This projects uses [NodeJS](https://nodejs.org/en/)

Open a terminal and navigate into the root of your clone of this repository.

1. `cd image_filtering/` - navigate to folder for backend server
2. `npm i` - installs the required dependencies
3. `npm run dev` - starts the development server

## Postman REST collection

The `cloud-cdnd-c2-final.postman_collection.json` contains sample REST request for interacting with the image filtering microservice.
