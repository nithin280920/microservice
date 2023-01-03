const express = require("express");
const gateWay = require("fast-gateway");
const port = 8000;

const server = gateWay({
  routes: [
    {
      prefix: "/user",
      target: "http://localhost3000",
    },
  ],
});

server.start(port, () => {
  console.log(`API Gateway running in http://localhost:${port}`);
});
