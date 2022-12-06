# FROM node:lts-alpine
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install
# COPY . .
# EXPOSE 3001
# RUN chown -R node /usr/src/app
# USER node
# CMD ["npm", "start"]

# FROM node:alpine
# WORKDIR /app
# RUN npm install -g npm@9.1.3
# COPY package.json ./
# COPY package-lock.json ./
# COPY ./ ./
# RUN npm i
# CMD ["npm", "run", "start"]


FROM node:lts-alpine
ENV NODE_ENV=production

RUN mkdir /app

WORKDIR /app

RUN npm install -g npm@9.1.3

COPY package*.json /app/

RUN npm install

COPY . /app

CMD ["npm", "start"]
