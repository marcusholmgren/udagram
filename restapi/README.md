# Udagram REST API

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

### /feed

Get feed items list
```
GET http://localhost:8080/api/v0/feed
```

Get a feed item by id
```
GET http://localhost:8080/api/v0/feed/1
```

Update an existing feed item
```
PATCH http://localhost:8080/api/v0/feed/1
Content-Type: application/json

[
  { "op": "update", "variable": "caption", "value": "Hello" }
]
```

Add a new feed item
```
POST http://localhost:8080/api/v0/feed
Content-Type: application/json

{
  "caption": "hej",
  "url": "test.jpg"
}
```

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
  "email": "<valid email>",
  "password": "abc123"
}
```
s