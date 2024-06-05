
const express = require('express')
const connection = require('../mysql/mysql')
const error_handler = require('./error_controller')
const bcrypt = require('bcrypt')

const register = function (req, res) {
    //check all parameters exists
    const email = req.body.email
    const {password,phone_number,first_name,last_name} = req.body
    if(email == null||password==null||phone_number==null||first_name==null||last_name==null){
        return error_handler("all fields are required",req,res,404);
    }
    //check for syntax for all parameters
    // valid email format (example@example.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return error_handler("Invalid email format", req, res, 400);
    }
   // Validate password syntax (at least 8 characters, one uppercase letter, one lowercase letter, one number, one special character)
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   if (!passwordRegex.test(password)) {
       return error_handler("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character", req, res, 400);
   }

   const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone_number)) {
        return error_handler("Invalid phone number format", req, res, 400);
    }

    const user_exists_query = "SELECT * FROM users where email=?"
    connection.query(user_exists_query, [email], function (err, results) {
        if (err) {
            error_handler(err, req, res, 400)
        }
        if (results.length > 0) {
            error_handler("user already exists", req, res, 400)
        } else {
            //password hashing should be done 
            const saltRounds = 10 
            const plainpassword = req.body.password
            const hash_password = bcrypt.hashSync(plainpassword,saltRounds)
            console.log(hash_password)

            const register_query = "INSERT INTO users SET email=?,password=?,phone_number=?,first_name=?,last_name=?"
            const user_details = req.body
            connection.query(register_query, [user_details.email,hash_password , user_details.phone_number, user_details.first_name, user_details.last_name], function (err1, results1) {
                if (err1) {
                    error_handler(err1, req, res, 400)
                } else {
                    res.set({
                        "Content-Type": "Application/json"
                    })
                    res.statusCode = 201
                    response_body = {
                        "message": "user created"
                    }
                    res.send(response_body)
                }

            })
        }
    })
}
module.exports = register