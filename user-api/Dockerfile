FROM node:15.3-buster-slim

WORKDIR /usr/src/app

# add app
COPY . .
RUN npm install

ENTRYPOINT ["npm", "run", "dev"]
