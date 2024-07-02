const express = require('express')
const router = express.Router()
const  connection = require('../mysql/mysql')
const error_handler = require('../controllers/Error_Handler')
const register = require('../controllers/register')
const login = require('../controllers/login')
const addtask = require('../controllers/addnewtask')

router.get('/tasks',function(req,res){
   const user_query = "select * from tasks;"
   connection.query(user_query,function(error,results){
    if(error){
        res.statusCode = 400
        res.send({"meaasge":"there is an error while querying the database"

        })
    }else{
        if(results.length){
            const response_body = results
            res.set({
                "content-type":"application/json"
            })
            res.statusCode=200
            res.send(response_body)
        }else{
            res.send({
                "message":"no users"
            })
        }
    }
   })
})
router.get('/users',function(req,res){
    const user_query = "select * from users;"
    connection.query(user_query,function(error,results){
     if(error){
         res.statusCode = 400
         res.send({"meaasge":"there is an error while querying the database"
 
         })
     }else{
         if(results.length){
             const response_body = results
             res.set({
                 "content-type":"application/json"
             })
             res.statusCode=200
             res.send(response_body)
         }else{
             res.send({
                 "message":"no users"
             })
         }
     }
    })
 })

 router.get('/taskinfo',function(req,res){
    const user_id = req.query.user_id
    const user_query = "select * from tasks where user_id=?;"
    connection.query(user_query,[user_id],function(error,results){
     if(error){
         res.statusCode = 400
         res.send({"meaasge":"there is an error while querying the database"
 
         })
     }else{
         if(results.length){
             const response_body = results
             res.set({
                 "content-type":"application/json"
             })
             res.statusCode=200
             res.send(response_body)
         }else{
             res.send({
                 "message":"no users"
             })
         }
     }
    })
 })

 router.put('/tasks/:task_id',function(req,res){
    const task_id = req.params.task_id
    const{status} = req.body
    if(!status){
        error_handler("status require",req,res,400)
    }
    const update_query = "update tasks set status=? where task_id=?";
    connection.query(update_query,[status,task_id],function(error,results){
        if(error){
            error_handler("there is an error while updating the task",req,res,400)
        }else{
            if(results.affectedRows === 0){
                res.statusCode=404
                res.send({"message":"Task is not found"})
            }else{
                res.set({
                    "content-type":"application/json"
                })
                res.statusCode=200
                res.send({"message":"status of the task is updated successfully"})
            }
        }

    })
 })

 router.delete('/tasks/:task_id', function (req, res) {
    const task_id = req.params.task_id;

    const delete_query = "DELETE FROM tasks WHERE task_id = ?";
    connection.query(delete_query, [task_id], function (error, results) {
        if (error) {
            return error_handler("there is an error while deleting the task", req, res, 400);
        } else {
            if (results.affectedRows === 0) {
                res.statusCode = 404;
                res.send({ "message": "Task not found" });
            } else {
                res.set({ "content-type": "application/json" });
                res.statusCode = 200;
                res.send({ "message": "Task deleted successfully" });
            }
        }
    });
});



router.post("/register", register)

router.post("/login", login)

router.post("/addtask",addtask)
 
 
 
 

module.exports = router