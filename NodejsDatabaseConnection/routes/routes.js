const express = require('express')
const router = express.Router()
const connection = require('../mysql/mysql')
const error_handler = require('../Controller/error_controller')
const register = require('../Controller/register_controller')
const login = require('../Controller/login_controller')

router.get("/users", function (req, res) {
    const user_query = "select * from users";
    connection.query(user_query, function (error, results) {
        if (error) {
            error_handler(error, req, res, 400)
        }
        else {
            if (results.length) {
                const response_body = results
                res.set({ "connection-type": "application" })
                res.statusCode = 200
                res.send(response_body)
            }
            else {
                res.send("no users")
            }
        }
    })
})


router.get("/userinfo", function (req, res) {
    const Username = req.query.Username
    const user_query = "select * from users where Username=?";
    connection.query(user_query, [Username], function (error, results) {
        if (error) {
            error_handler(error, req, res, 400)
        }
        else {
            if (results.length) {
                const response_body = results
                res.set({ "connection-type": "application" })
                res.statusCode = 200
                res.send(response_body)
            }
            else {
                res.send("no users")
            }
        }
    })
})

router.post("/register", register)

router.post("/login", login)

module.exports = router;