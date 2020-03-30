FROM node:alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY ./ ./

EXPOSE 8000

CMD ["npm", "start"]
