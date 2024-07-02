const mysql = require('mysql2')

var connection = mysql.createPool({
    connectAttributes:10,
    host:'localhost',
    user:'root',
    password:'amu26',
    database:'taskmanagementsystem'
})
module.exports = connection