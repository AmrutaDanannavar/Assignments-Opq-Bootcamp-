const express = require('express')
const app = express()
const routes = require('./routes/route')
port = 8001

app.use(express.json());
app.use("/api",routes)

app.listen(port,function(err){
    if(err){
        console.log("there is an error while running the server")
    }
    console.log("server is running at port " + port)
})

