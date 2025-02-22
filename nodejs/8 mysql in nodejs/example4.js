// program showing the concept of mysql

var mysql = require("mysql2");
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root'
});

con.connect((error)=>{
    if(error)
        console.log("Error occures : ",error);
    else{
        console.log("Connection established successfully");
        const sqlQuery = 'create database mngdb';
        con.query(sqlQuery,(error,result)=>{
            if(error)
                console.log("Error while connecting with mysql : ",error);
            else{
                console.log("Database created successfully : ",result);
                con.close();
            }
        });
    }    
});
