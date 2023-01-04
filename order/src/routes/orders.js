const express = require("express");
const route = express.Router();

// Importing controllers
const { orders } = require("./../controller/ordersController");


route.post("/orders",orders);

module.exports = route;
