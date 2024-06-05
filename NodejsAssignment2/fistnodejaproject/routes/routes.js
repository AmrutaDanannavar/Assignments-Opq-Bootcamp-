
const express = require("express");
const router = express.Router()
module.exports = router;

router.get("/",function(req,res){
    console.log("this is my first api");
    res.send("this is my first api implemented");
})

router.post("/userinfo" ,function(req,res){
    console.log("this is my second api")
    res.json({
        "message":"This is my first userinfo request implemented"
    })
})

