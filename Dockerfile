FROM node:7-alpine

RUN mkdir -p /app

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV
COPY package.json /app/
RUN npm install
COPY . /app/
EXPOSE 3000
WORKDIR /app
CMD ["npm", "start"]
