const express = require('express');
const app = express();
const port = 3001;
require('dotenv').config();

app.use(express.json());

app.get('/', (req,res)=>{
    return res.status(200).send({ Message: "Orders route" });
    
})
const orders = require('./src/routes/orders');

//declaring routes
app.use('/orders', orders);

app.listen(port, "localhost", ()=>{
    console.log(`order running in http://localhost:${port}`);
})