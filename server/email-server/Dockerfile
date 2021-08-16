# Common build stage
FROM node:14.14.0-alpine3.12 

COPY . ./app

WORKDIR /app

RUN npm install

EXPOSE 3001

CMD ["node", "app.js"]