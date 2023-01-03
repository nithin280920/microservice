const express = require('express');
const app = express();
const port = 8000;
require('dotenv').config();

app.use(express.json());



app.listen(port, "localhost", ()=>{
    console.log(`API Gateway running in http://localhost:${port}`);
})