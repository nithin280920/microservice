const express = require("express");
const route = express.Router();

// Importing controllers
const { userData, userAllData, updateUserData, deleteUser } = require("./../controller/userController");


route.post("/user",userData);
route.get("/userfindall",userAllData);
route.patch("/userUpdate", updateUserData);
route.delete("/userDelete", deleteUser);

module.exports = route;
