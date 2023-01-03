const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();

app.use(express.json());



app.listen(port, "localhost", ()=>{
    console.log(`user running in http://localhost:${port}`);
})