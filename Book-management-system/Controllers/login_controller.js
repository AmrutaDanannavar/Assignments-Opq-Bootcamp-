const express = require('express')
const connection = require('../MySql/mysql')
const error_handler = require('../Controllers/error_handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'MY_SECRET_FOR_FSD_PROJECT'

const login = function(req,res){
    const email_id=req.body.email_id
    const password =req.body.password
    //email and password exixts
    if (!email_id || !password) {
        return error_handler("Email and password are required", req, res, 400);
    }
    
    //hash the password - use the same hashing mechanism used in register api 
    const user_exists_query = "SELECT * FROM users WHERE email_id = ?";
    connection.query(user_exists_query, [email_id], function (err, results) {
        if (err) {
            return error_handler(err, req, res, 400);
        }

        if (results.length > 0) {
            const user = results[0];

            // Compare the provided password with the stored hashed password
            bcrypt.compare(password, user.password, function (err, isMatch) {
                if (err) {
                    return error_handler(err, req, res, 400);
                }

                if (isMatch) {
                    res.statusCode = 200;
                    res.set({
                        "Content-Type": "application/json"
                    });

                    //Generating jwt 
                    const payload = {
                        "user_id":results[0].user_id,
                        "email_id":results[0].email_id
                    }
                    jwt_token =jwt.sign(payload,JWT_SECRET,{expiresIn:'2h'})

                    const response = {
                        "message": "Login is successful, enjoy",
                        "user_token":jwt_token
                        
                    };
                    res.send(response);
                } else {
                    error_handler("Email Address/Password is incorrect", req, res, 400);
                }
            });
        } else {
            error_handler("Email Address/Password is incorrect", req, res, 400);
        }
    });

}
module.exports = login