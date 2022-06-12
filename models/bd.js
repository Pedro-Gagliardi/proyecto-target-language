var mysql = require('mysql');
var util = require('util');

var connection = mysql.createConnection({ 
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME    
});

connection.query = util.promisify(connection.query);

module.exports = connection;