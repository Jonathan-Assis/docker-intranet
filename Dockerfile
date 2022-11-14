FROM node:alpine

WORKDIR /docker-intranet

COPY package*.json ./
RUN npm install

COPY . /docker-intranet/

EXPOSE 3000

CMD ["npm", "start"]