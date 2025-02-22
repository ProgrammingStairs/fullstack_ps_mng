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
    else    
        console.log("Connection established successfully");
});
