const express = require("express");
const route = express.Router();

// Importing controllers
const { userData, updateUserData, deleteUser } = require("./../controller/userController");


route.post("/user",userData);
route.patch("/userUpdate", updateUserData);
route.delete("/userDelete", deleteUser);

module.exports = route;
