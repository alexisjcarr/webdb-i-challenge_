const express = require("express");
const bodyParser = require("body-parser");

const db = require("./data/dbConfig.js");

const accountRouter = require("./routers/accountRouter");

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use("/accounts", accountRouter);

module.exports = server;
