const express = require('express')
const connection = require('../MySql/mysql')
const error_handler = require('../Controllers/error_handler')
const bcrypt = require('bcrypt')


const Addbook = function(req,res){
    jwt_decoded = res.locals
    console.log(jwt_decoded)
    const ISBN = req.body.ISBN 
   const ISBN_exists_query = "select * from books where ISBN=?;"
   connection.query(ISBN_exists_query,[ISBN],function(err,results){
    if(err){
        error_handler(err,req,res,400)
    }
    if(results.length>0){
        error_handler("The Book  is already there",req,res,400)
    }else{
        const addbook_query = "insert into books set user_id=?,book_name=?,author=?,published_year=?,ISBN=?";
        const book_details = req.body
        connection.query(addbook_query,[jwt_decoded.user_id,book_details.book_name,book_details.author,book_details.published_year,book_details.ISBN],function(err1,results1){
            if(err1){
               error_handler(err1,req,res,400)
            }else{
                res.set({
                    "content-type":"application/json"
                })
                res.statusCode = 201
                response_body= {
                    "message":"A new Book  is added "
                }
                res.send(response_body)
            }

        })
    }

   })
}
module.exports = Addbook