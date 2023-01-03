const express = require('express');
const app = express();
const port = 3001;
require('dotenv').config();

app.use(express.json());



app.listen(port, "localhost", ()=>{
    console.log(`order running in http://localhost:${port}`);
})