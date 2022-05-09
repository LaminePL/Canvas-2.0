const mysql = require('mysql');


// create mysql connection

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'canvasbis'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log("Database connected successfully ;)")
})

module.exports = dbConn;

