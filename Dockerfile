#Base OS

FROM node:18-slim

WORKDIR /app

COPY package.json package-lock.json .

RUN npm install

COPY app.js .

EXPOSE 8000

CMD ["node", "app.js"]