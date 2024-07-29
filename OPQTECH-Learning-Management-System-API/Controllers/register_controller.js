const express = require('express')
const error_handler = require('../Controllers/error_handler')
const connection = require('../MY_SQL/my_sql')
const bcrypt = require('bcrypt')


const register = function(req,res){
    const {name, email,password ,batch_id}=req.body
    if(name==null|| email==null||password==null||batch_id==null){
        return error_handler("all fields are required",req,res,404);
    }
    // valid email format (example@example.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test( email)) {
        return error_handler("Invalid email format", req, res, 400);
    }
    //validate password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        return error_handler("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character", req, res, 400);
   }
   

   const user_exist_query = "select * from students where  email=?";
   connection.query(user_exist_query,[ email],function(err,results){
    if(err){
        error_handler(err,req,res,400)
    }
    if( results && results.length > 0){
        error_handler("user already exist",req,res,400)
    }else{
        //password hashing
        const saltRounds = 10 
        const plain_text = req.body.password
        const hash_password = bcrypt.hashSync(plain_text,saltRounds);

        const register_query = 'INSERT INTO students SET name=?, email=?, password=?, batch_id=?';
        const user_details = req.body
        connection.query(register_query,[user_details.name,user_details. email,hash_password,user_details.batch_id ],function(err1,results1){
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

const getstudentdashboard = function(req, res) {
    const { id } = req.params;
    const student_query = "SELECT * FROM students WHERE id = ?";
    connection.query(student_query, [id], function(error, results) {
        if (error) {
            res.statusCode = 400;
            res.send({"message": "There is an error while querying the database"});
        } else {
            if (results.length) {
                const response_body = results[0];
                res.set({"Content-Type": "application/json"});
                res.statusCode = 200;
                res.send(response_body);
            } else {
                res.statusCode = 404;
                res.send({"message": "No Users"});
            }
        }
    });
}
module.exports = {
    register,
    getstudentdashboard
};
