const { ServiceBroker } = require("moleculer");
const jsonServer = require("json-server");
const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config()

const broker = new ServiceBroker();

const jsonServerApp = jsonServer.create();
const router = jsonServer.router('./data.json');
const middlewares = jsonServer.defaults();

jsonServerApp.use(middlewares);
jsonServerApp.use(bodyParser.json());
jsonServerApp.use(router);

jsonServerApp.listen(process.env.PORT);

broker.createService({
  name: "sdui_form",
  actions: {
    start() {
      return;
    },
  },
});

broker.start().then(() => {
  console.log();
});
