const express = require('express')
const mysql = require('mysql2')
const bcrypt = require('bcrypt')
const connection = require('../mysql/mysql')
const error_handler = require('../controllers/Error_Handler')

const login = function (req,res){
    const email=req.body.email
    const password =req.body.password
    //email and password exixts
    if (!email || !password) {
        return error_handler("Email and password are required", req, res, 400);
    }
    
    //hash the password - use the same hashing mechanism used in register api 
    const user_exists_query = "SELECT * FROM users WHERE email = ?";
    connection.query(user_exists_query, [email], function (err, results) {
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
                    const response = {
                        "message": "Login is successful, enjoy",
                        
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
};

module.exports = login;