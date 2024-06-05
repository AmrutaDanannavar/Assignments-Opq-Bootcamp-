const express = require('express');
const app = express();
port = 8000;
const routes = require('./routes/routes')

app.use(express.json());
app.use("/api", routes)

app.listen(port, function (err) {
    if (err) {
        console.log("there is error");
    }
    console.log("server is running at port " + port);
})