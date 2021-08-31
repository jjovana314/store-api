FROM node:latest

RUN npm install nest -g --save
 
WORKDIR /usr/src/api

COPY . /usr/src/api/
 
COPY package*.json /usr/src/api/

EXPOSE 3000

CMD [ "npm", "start" ]