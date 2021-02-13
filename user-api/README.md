# Udagram User REST API

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree.
It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

## Getting Setup

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```bash
npm install
```

## Running the Server Locally
To run the server locally in developer mode, open terminal and run:
```bash
npm run dev
```

Developer mode runs off the TypeScript source. Any saves will reset the server and run the latest version of the codebase. 

## HTTP Requests

### /users

Users route (returns nothing)
```
GET http://localhost:8080/api/v0/users
```


Get a user by email
```
GET http://localhost:8080/api/v0/users/<valid email>
```

Add a new user with email and password
```
POST http://localhost:8080/api/v0/users/auth
Content-Type: application/json

{
  "email": "`<valid email>`",
  "password": "abc123"
}
```

### /users/auth

Login with user
```
POST http://localhost:8080/api/v0/users/auth/login
Content-Type: application/json

{
  "email": "<valid email>",
  "password": "abc123"
}
``

Validate users JSON Web Token
``
GET http://localhost:8080/api/v0/users/auth/verification
Authorization: Bearer <valid JWT>
``
