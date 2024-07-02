const express = require('express')
const connection = require('../MySql/mysql')
const error_handler = require('../Controllers/error_handler')
const bcrypt = require('bcrypt')

const deletebook =function (req, res) {
    const book_id = req.params.book_id;

    const delete_query = "DELETE FROM books WHERE book_id = ?";
    connection.query(delete_query, [book_id], function (error, results) {
        if (error) {
            return error_handler("there is an error while deleting the book", req, res, 400);
        } else {
            if (results.affectedRows === 0) {
                res.statusCode = 404;
                res.send({ "message": "Book not found" });
            } else {
                res.set({ "content-type": "application/json" });
                res.statusCode = 200;
                res.send({ "message": "Book deleted successfully" });
            }
        }
    });
}
module.exports = deletebook