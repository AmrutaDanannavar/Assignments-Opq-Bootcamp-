const express = require('express')
const router = express.Router()
const connection = require('../MySql/mysql')
const bcrypt = require('bcrypt')
const error_handler = require('../Controllers/error_handler')
const register = require('../Controllers/registration_controller')
const login = require('../Controllers/login_controller')
const Addbook = require('../Controllers/addbook_controller')
const updatestatus = require('../Controllers/update_controller')
const deletebook = require('../Controllers/delete_controller')
const jwt_verify = require('../Controllers/jwt_controller')


//Getting all the users 

router.get('/users', jwt_verify,function(req,res){
    jwt_decoded = res.locals
    console.log(jwt_decoded)
    const user_query = "select *  from users where user_id=?"
    connection.query (user_query,[jwt_decoded.user_id],function(error,results){
        if(error){
            res.statusCode = 400
            res.send({"message":"There is an error while querying the database"})
        }
        else{
            if(results.length){
                const response_body = results
                res.set ({"connection-type":"application/json"})
                res.statusCode = 200
                res.send(response_body)
            }else{
                res.send({"message":"No Users"})
            }
        }
    })
})

//User Registration 

router.post("/registration", register)

//User Login 

router.post('/login',login)

// Adding New Book 

router.post('/addbook',jwt_verify,Addbook)

// Getting all the books 
router.get('/books',jwt_verify,function(req,res){
    jwt_decoded= res.locals
    const book_query = "select * from books where user_id=?;"
    connection.query(book_query ,[jwt_decoded.user_id],function(error,results){
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
                 "message":"No books"
             })
         }
     }
    })
 })

 // Getting particular  book

 router.get('/bookinfo',function(req,res){
    const user_id = req.query.user_id
    const user_query = "select * from books where user_id=?;"
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
                 "message":"For this user book  is not assigned"
             })
         }
     }
    })
 })

 // updating read  status
 router.put('/books/:book_id',updatestatus)

 //Deleting Book
 router.delete('/books/:book_id', deletebook)

 module.exports = router;