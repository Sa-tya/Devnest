const express = require('C:\\Users\\SP\\Documents\\Visual Studio Code\\Web_Dev\\JavaScript\\node_modules\\express');
const sql = require('..\\..\\Visual Studio Code\\Web_Dev\\JavaScript\\node_modules\\mysql');

var connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'devnest'
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected ...");
});
    
    // var qry = "INSERT INTO quiz VALUES (null, 'Who is PM of India ?', 'N. Modi','R. Gandhi','M. M. Singh','A. Shah')";
    // connection.query(qry , function (error,res){
    //     if(error) throw error;
    //     console.log("added...");
    //     console.log(res);
    // });

    connection.query("select * from quiz",function(error,result){
        if(error) throw error;
        console.warn(result[0]);
        });
connection.end();
