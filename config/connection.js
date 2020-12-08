const mysql = require('mysql2')
const connection = mysql.createConnection('mysql://root:rootroot@localhost/burgers_db')

module.exports = connection
