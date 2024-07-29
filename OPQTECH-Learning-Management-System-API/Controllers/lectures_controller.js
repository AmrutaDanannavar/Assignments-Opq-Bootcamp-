const express = require('express')
const error_handler = require('./error_handler')
const connection = require('../MY_SQL/my_sql')

const lectures = function (req, res) {
    const { batch_id, instructor_id, topic, date, duration } = req.body
    if (batch_id == null || instructor_id == null || topic == null || date == null || duration == null) {
        return error_handler("all fields are required", req, res, 404);
    }
    else {
        const lecture_query = 'INSERT INTO lectures (batch_id ,instructor_id, topic,date,duration) VALUES (?, ?,?,?,?)';
        const lecture_details = req.body
        connection.query(lecture_query, [lecture_details.batch_id, lecture_details.instructor_id, lecture_details.topic, lecture_details.date, lecture_details.duration], function (err1, results1) {
            if (err1) {
                error_handler(err1, req, res, 400)
            } else {

                res.set({
                    "content-type": "application/json"
                })
                res.statusCode = 201
                response_body = {
                    "message": "Lectures added ",

                }
                res.send(response_body)
            }
        })

    }
}

const getlectures = function (req, res) {
    const getlecture_query = "SELECT * FROM lectures";
    connection.query(getlecture_query, function (error, results) {
        if (error) {
            console.error('Error while querying the database:', error);
            res.status(500).json({ "message": "There is an error while querying the database" });
        } else {
            if (results.length > 0) {
                res.setHeader("Content-Type", "application/json");
                res.status(200).json(results);
            } else {
                res.status(404).json({ "message": "No lectures found" });
            }
        }
    });
};

const getLecturesForBatch = function (req, res) {
    const batch_id = req.params.batch_id;

    if (!batch_id) {
        return res.status(400).json({ "message": "Batch ID is required" });
    }

    const getLectureQuery = "SELECT * FROM lectures WHERE batch_id = ?";

    connection.query(getLectureQuery, [batch_id], function (error, results) {
        if (error) {
            console.error('Error while querying the database:', error);
            return res.status(500).json({ "message": "There is an error while querying the database" });
        }

        if (results.length > 0) {
            res.setHeader("Content-Type", "application/json");
            res.status(200).json(results);
        } else {
            res.status(404).json({ "message": "No lectures found for the specified batch" });
        }
    });
};

const updatelecture = function (req, res) {
    const id = req.params.id; // Extract ID from URL parameter
    const { instructor_id, topic, date, duration } = req.body;

    if (!instructor_id || !topic || !date || !duration) {
        return error_handler("All fields are required", req, res, 400);
    }

    const update_query = "UPDATE lectures SET instructor_id=?, topic=?, date=?, duration=? WHERE id=?";
    connection.query(update_query, [instructor_id, topic, date, duration, id], function (error, results) {
        if (error) {
            console.error('Error while updating lecture:', error); // Log error for debugging
            return error_handler("There is an error while updating the lecture", req, res, 400);
        } else {
            if (results.affectedRows === 0) {
                res.statusCode = 404;
                res.send({ "message": "Lecture not found" });
            } else {
                res.set({ "Content-Type": "application/json" });
                res.statusCode = 200;
                res.send({ "message": "Lecture details updated successfully" });
            }
        }
    });
};

module.exports = {
    lectures,
    getlectures,
    updatelecture,
    getLecturesForBatch
};