const express = require('express')
const mysql = require('mysql2')
const error_handler = require('../controllers/Error_Handler')
const connection = require('../mysql/mysql')



const addnewtask = function(req,res){
   const task_id = req.body.task_id  
   const task_exists_query = "select * from tasks where task_id=?;"
   connection.query(task_exists_query,[task_id],function(err,results){
    if(err){
        error_handler(err,req,res,400)
    }
    if(results.length>0){
        error_handler("the task is already there",req,res,400)
    }else{
        const task_query = "insert into tasks set task_id=?,user_id=?,taskname=?,description=?,status=?,due_date=?";
        const task_details = req.body
        connection.query(task_query,[task_details.task_id,task_details.user_id,task_details.taskname,task_details.description,task_details.status,task_details.due_date],function(err1,results1){
            if(err1){
               error_handler(err1,req,res,400)
            }else{
                res.set({
                    "content-type":"application/json"
                })
                res.statusCode = 201
                response_body= {
                    "message":"A new task is added to the taks"
                }
                res.send(response_body)
            }

        })
    }

   })

}

module.exports= addnewtask