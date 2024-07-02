const express = require('express')
const connection = require('../MySql/mysql')
const error_handler = require('../Controllers/error_handler')
const bcrypt = require('bcrypt')


const updatestatus=function(req,res){
    const book_id = req.params.book_id
    const{status} = req.body
    if(!status){
        error_handler("status require",req,res,400)
    }
    const update_query = "update books set status=? where book_id=?";
    connection.query(update_query,[status,book_id],function(error,results){
        if(error){
            error_handler("there is an error while updating the status",req,res,400)
        }else{
            if(results.affectedRows === 0){
                res.statusCode=404
                res.send({"message":"Book  is not found"})
            }else{
                res.set({
                    "content-type":"application/json"
                })
                res.statusCode=200
                res.send({"message":"status of the Book is updated successfully"})
            }
        }

    })
 }
 module.exports = updatestatus