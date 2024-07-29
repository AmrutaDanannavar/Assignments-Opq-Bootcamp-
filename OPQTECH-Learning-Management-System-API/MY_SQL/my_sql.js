const mysql = require('mysql2')
const dotenv = require("dotenv").config()

var connection  = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user:'root',
    password :'amu26',
    database : 'opqtech_management_system'
});

module.exports = connection;