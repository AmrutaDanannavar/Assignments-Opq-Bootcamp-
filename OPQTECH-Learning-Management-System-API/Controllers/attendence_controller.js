const express = require('express')
const error_handler = require('./error_handler')
const connection = require('../MY_SQL/my_sql')


const attendence = function(req,res){
    const {student_id,status }=req.body
    if(student_id==null||status==null){
        return error_handler("all fields are required",req,res,404);
    }
   const attendence_exist_query = "select * from attendence where  student_id=?";
   connection.query(attendence_exist_query,[ student_id],function(err,results){
    if(err){
        error_handler(err,req,res,400)
    }
    if( results && results.length > 0){
        error_handler("Student already taken then attendence ",req,res,400)
    }else{
        
        const attendence_query = 'INSERT INTO attendence (student_id, status) VALUES (?, ?)';
        const attendence_details = req.body
        connection.query(attendence_query,[attendence_details.student_id,attendence_details.status, ],function(err1,results1){
            if(err1){
                error_handler(err1,req,res,400)
             }else{
                 
                 res.set({
                     "content-type":"application/json"
                 })
                 res.statusCode = 201
                 response_body= {
                     "message":"Attendence taken  ",
                     
                 }
                 res.send(response_body)
             }
        })
        
     }
   })
}

const getattendence = function(req, res) {
    const student_id = req.params.student_id;
    
    const attendence_query = "SELECT * FROM attendence WHERE student_id= ? ";
    connection.query(attendence_query, [student_id], function(error, results) {
        if (error) {
            console.error('Error while querying the database:', error);
            res.statusCode = 400;
            res.send({ "message": "There is an error while querying the database" });
        } else {
            if (results.length) {
                const response_body = results[0];
                res.set({ "Content-Type": "application/json" });
                res.statusCode = 200;
                res.send(response_body);
            } else {
                console.log(`No attendance record found for student_id: ${student_id}`);
                res.statusCode = 404;
                res.send({ "message": "student_id not found" });
            }
        }
    });
}

module.exports = {
    attendence,
    getattendence
};