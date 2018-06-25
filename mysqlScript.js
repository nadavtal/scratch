

console.log("here");
var express = require('express');
var mysql = require('mysql')
var app = express()

var connection = mysql.createConnection({
    //propertis
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'SCRATCH'
});

connection.connect(function(error) {
    if(!!error) {
        console.log("error");
    } else{
        console.log("connected");
    }
})

app.get('/', function(rew, resp) {
    // about mysql
    connection.query("SELECT * FROM profiles", function(error, row, fields) {
        // callback
        if(!!error) {
            console.log('query error');
        }else{
            console.log('successfull query\n');
            console.log(row[0].first_name);
        }
    })
})
app.listen(300)