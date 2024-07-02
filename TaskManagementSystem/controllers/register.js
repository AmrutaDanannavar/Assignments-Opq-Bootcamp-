const express = require('express')
const mysql = require('mysql2')
const error_handler = require('../controllers/Error_Handler')
const connection = require('../mysql/mysql')
const bcrypt = require('bcrypt')


const register = function(req,res){
  // checking all the parameters existances
    const {user_id,username,email,password,phone_number} = req.body
    if(user_id==null|| username==null||email == null||password==null||phone_number==null){
        return error_handler("all fields are required",req,res,404);
    }
    // valid email format (example@example.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
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
   
   const user_exists_query = "select * from users where email=?;"
   connection.query(user_exists_query,[email],function(err,results){
    if(err){
        error_handler(err,req,res,400)
    }
    if(results.length>0){
        error_handler("user already exist",req,res,400)
    }else{
         //password hashing should be done 
        const saltRounds = 10 
        const plainpassword = req.body.password
        const hash_password = bcrypt.hashSync(plainpassword,saltRounds)
        
        const register_query = "insert into users set user_id=?,username=?,email=?,password=?,phone_number=?";
        const user_details = req.body
        connection.query(register_query,[user_details.user_id,user_details.username,user_details.email,hash_password,user_details.phone_number],function(err1,results1){
            if(err1){
               error_handler(err1,req,res,400)
            }else{
                res.set({
                    "content-type":"application/json"
                })
                res.statusCode = 201
                response_body= {
                    "message":"user created ,login and enjoy"
                }
                res.send(response_body)
            }

        })
    }

   })

}

module.exports = register