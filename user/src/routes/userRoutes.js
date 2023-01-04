const express = require("express");
const route = express.Router();

// Importing controllers
const {
  userData,
  userAllData,
  updateUserData,
  deleteUser,
  belongsTo,
  oneToOne,
  oneToMany,
  manyToMany,
} = require("./../controller/userController");

route.post("/user", userData);
route.get("/userfindall", userAllData);
route.patch("/userUpdate", updateUserData);
route.delete("/userDelete", deleteUser);
route.post("/oneToOne", oneToOne);
route.post("/belongsTo", belongsTo);
route.post("/oneToMany", oneToMany);
route.post("/manyToMany", manyToMany);

module.exports = route;
