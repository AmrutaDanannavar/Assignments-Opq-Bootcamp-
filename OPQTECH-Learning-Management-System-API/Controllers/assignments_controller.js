const express = require('express')
const error_handler = require('./error_handler')
const connection = require('../MY_SQL/my_sql')

const assignments = function(req,res){
    const { title , description, student_id,batch_id,instructor_id, due_date,duration  }=req.body
    if(title ==null||student_id==null||description==null||batch_id==null||instructor_id==null|| due_date==null||duration==null){
        return error_handler("all fields are required",req,res,404);
    }
     else{
        const assignement_query = 'INSERT INTO assignments (title , description,student_id,batch_id,instructor_id, due_date,duration ) VALUES (?, ?,?,?,?,?,?)';
        const assignement_details = req.body
        connection.query(assignement_query,[assignement_details.title, assignement_details.description,assignement_details.student_id,assignement_details.batch_id,assignement_details.instructor_id,assignement_details.due_date,assignement_details.duration ],function(err1,results1){
            if(err1){
                error_handler(err1,req,res,400)
             }else{
                 
                 res.set({
                     "content-type":"application/json"
                 })
                 res.statusCode = 201
                 response_body= {
                     "message":"Assignment added ",
                     
                 }
                 res.send(response_body)
             }
        })
        
     }
   }


const getassignment = function(req, res) {
    const id = req.params.id;
    
    const getassignment_query = "SELECT * FROM assignments WHERE id= ? ";
    connection.query(getassignment_query, [id], function(error, results) {
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
               
                res.send({ "message": "assignment is  is  not found" });
            }
        }
    });
}

const getassignmentbystudent = function(req, res) {
    const student_id = req.params.student_id ;
    
    const getassignmentbystudent_query = "SELECT * FROM assignments WHERE student_id = ? ";
    connection.query(getassignmentbystudent_query, [student_id ], function(error, results) {
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
               
                res.send({ "message": "assignment is  is  not found" });
            }
        }
    });
}

const updateassignment = function(req, res) {
    const id = req.params.id; // Extract ID from URL parameter
    const { title, description,student_id, batch_id, instructor_id, due_date, duration } = req.body;

    if(title ==null||description==null||student_id==null||batch_id==null||instructor_id==null|| due_date==null||duration==null){
        return error_handler("all fields are required",req,res,404);
    }

    const update_query = "UPDATE assignments SET title=?, description=?, student_id=?,batch_id=?, instructor_id=?, due_date=?, duration=? WHERE id=?";
    connection.query(update_query, [title, description,student_id, batch_id, instructor_id, due_date, duration, id], function(error, results) {
        if (error) {
            console.error('Error while updating assignment:', error); // Log error for debugging
            return error_handler("There is an error while updating the assignment", req, res, 400);
        } else {
            if (results.affectedRows === 0) {
                res.statusCode = 404;
                res.send({ "message": "Assignment not found" });
            } else {
                res.set({ "Content-Type": "application/json" });
                res.statusCode = 200;
                res.send({ "message": "Assignment details updated successfully" });
            }
        }
    });
};

module.exports = {
    assignments,
    getassignment,
    updateassignment,
    getassignmentbystudent
    
};