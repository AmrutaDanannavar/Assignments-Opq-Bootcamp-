const express = require ('express');
const app = express();
const dotenv = require('dotenv').config();
const routes = require ('./routes/routes')

port = process.env.PORT

app.use("/api" , routes);

app.listen(port,function(err){
    if(err){
        console.log("there is an error");

    }
    console.log("server is running at port "+port);
})

