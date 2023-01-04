const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send({ Message: "User route" });
});
const user = require("./src/routes/userRoutes");

//declaring routes
app.use("/user", user);

app.listen(port, "localhost", () => {
  console.log(`user running in http://localhost:${port}`);
});
