// program showing the concept of mysql

var mysql = require("mysql2");
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:"mngdb"
});

con.connect((error)=>{
    if(error)
        console.log("Error occures : ",error);
    else{
        console.log("Connection established successfully");
        const sqlQuery = 'create table student(studId int not null primary key auto_increment,studName varchar(45) not null,studEmail varchar(45) not null,studPer double not null default 0)';
        con.query(sqlQuery,(error,result)=>{
            if(error)
                console.log("Error while creating table : ",error);
            else{
                console.log("Table created successfully : ",result);
                con.close();
            }
        });
    }    
});
