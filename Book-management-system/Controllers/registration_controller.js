const express = require('express')
const connection = require('../MySql/mysql')
const error_handler = require('../Controllers/error_handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const register = function(req,res){
    const {user_name,phone_number,email_id,password}=req.body
    if(user_name==null||phone_number==null||email_id==null||password==null){
        return error_handler("all fields are required",req,res,404);
    }
    // valid email format (example@example.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email_id)) {
        return error_handler("Invalid email format", req, res, 400);
    }
    //validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        return error_handler("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character", req, res, 400);
   }
   //validate phone number
   const phoneRegex = /^\d{10}$/;
   if (!phoneRegex.test(phone_number)) {
     return error_handler("Invalid phone number format", req, res, 400);
   }

   const user_exist_query = "select * from users where email_id=?";
   connection.query(user_exist_query,[email_id],function(err,results){
    if(err){
        error_handler(err,req,res,400)
    }
    if(results.length >0){
        error_handler("user already exist",req,res,400)
    }else{
        //password hashing
        const saltRounds = 10 
        const plain_text = req.body.password
        const hash_password = bcrypt.hashSync(plain_text,saltRounds);

        const register_query = "insert into users set user_name=?,phone_number=?,email_id=?,password=?";
        const user_details = req.body
        connection.query(register_query,[user_details.user_name,user_details.phone_number,user_details.email_id,hash_password ],function(err1,results1){
            if(err1){
                error_handler(err1,req,res,400)
             }else{
                 // Generate JWT
                 

                 res.set({
                     "content-type":"application/json"
                 })
                 res.statusCode = 201
                 response_body= {
                     "message":"user created ,login and enjoy",
                     
                 }
                 res.send(response_body)
             }
        })
        
     }
   })
}
module.exports= register

