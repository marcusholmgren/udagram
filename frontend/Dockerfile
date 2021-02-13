FROM node:15.3-buster-slim as build

WORKDIR /app

COPY package*.json /app/

RUN apt-get update || : && apt-get install build-essential python2 -y
RUN npm install -g ionic
RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/www/ /usr/share/nginx/html/
