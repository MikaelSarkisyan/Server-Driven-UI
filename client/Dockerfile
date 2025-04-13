FROM node:20.17.0 as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN chmod +x node_modules/.bin/vite

RUN chmod +x node_modules/.bin/vue-tsc

RUN npm run build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
