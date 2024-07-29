const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const routes = require ('./Routes/route');

PORT = process.env.PORT

app.use(express.json());
app.use('/api',routes);

app.listen('6000',function(err){
    if(err){
        console.log("there is an error")
    }
    else{
        console.log("Server is Running at " + PORT)
    }

})