const express = require('express')
const error_handler = require('./error_handler')
const connection = require('../MY_SQL/my_sql')




const getlistofclasses = function (req, res) {
    const getclass_query = "SELECT * FROM classes ";
    connection.query(getclass_query, function (error, results) {
        if (error) {
            console.error('Error while querying the database:', error);
            res.status(500).json({ "message": "There is an error while querying the database" });
        } else {
            if (results.length > 0) {
                res.setHeader("Content-Type", "application/json");
                res.status(200).json(results);
            } else {
                res.status(404).json({ "message": "No classes found" });
            }
        }
    });
};
module.exports = {
    getlistofclasses
};