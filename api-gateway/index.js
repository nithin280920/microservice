//const express = require("express");
const gateWay = require("fast-gateway");
const port = 8000;

const server = gateWay({
  routes: [
    // calling user service
    {
      prefix: "/user",
      target: "http://localhost:3000/",
    },
    // calling order service
    {
      prefix: "/orders",
      target: "http://localhost:3001/",
    }
  ],
});

server.get('/test',(req,res)=>res.send('gateway runing'));

server.start(port).then(server=>{
  console.log(`API Gateway running in http://localhost:${port}`);
})