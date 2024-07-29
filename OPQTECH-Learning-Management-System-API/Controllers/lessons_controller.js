const express = require('express')
const error_handler = require('./error_handler')
const connection = require('../MY_SQL/my_sql')

const lessons = function (req, res) {
    const { title,content, instructor_id, date, duration } = req.body
    if (title== null ||content==null|| instructor_id == null  || date == null || duration == null) {
        return error_handler("all fields are required", req, res, 404);
    }
    else {
        const lessons_query = 'INSERT INTO lessons (title,content, instructor_id, date, duration) VALUES (?, ?,?,?,?)';
        const lessons_details = req.body
        connection.query(lessons_query, [lessons_details.title,lessons_details.content, lessons_details.instructor_id,  lessons_details.date, lessons_details.duration], function (err1, results1) {
            if (err1) {
                error_handler(err1, req, res, 400)
            } else {

                res.set({
                    "content-type": "application/json"
                })
                res.statusCode = 201
                response_body = {
                    "message": "Lesson added ",

                }
                res.send(response_body)
            }
        })

    }
}

const updatelesson = function (req, res) {
    const id = req.params.id; 
    const {  title,content, instructor_id, date, duration } = req.body;

    if (title== null ||content==null|| instructor_id == null  || date == null || duration == null) {
        return error_handler("all fields are required", req, res, 404);
    }

    const update_query = "UPDATE lessons SET title=?,content=?, instructor_id=?, date=?, duration =? WHERE id=?";
    connection.query(update_query, [title,content, instructor_id, date, duration,id], function (error, results) {
        if (error) {
            console.error('Error while updating lecture:', error); 
            return error_handler("There is an error while updating the lecture", req, res, 400);
        } else {
            if (results.affectedRows === 0) {
                res.statusCode = 404;
                res.send({ "message": "Lesson not found" });
            } else {
                res.set({ "Content-Type": "application/json" });
                res.statusCode = 200;
                res.send({ "message": "Lesson details updated successfully" });
            }
        }
    });
};

module.exports = {
    lessons,
    updatelesson
  
};