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
        const sqlQuery = 'insert into student(studname,studemail) values("Jackson Jack","jack@gmail.com")';
        //const sqlQuery = 'insert into student values(100,"Peter Parker","peter@gmail.com",67)';
        
        con.query(sqlQuery,(error,result)=>{
            if(error)
                console.log("Error while inserting data : ",error);
            else{
                console.log("Data inserted successfully : ",result);
                con.close();
            }
        });
    }    
});
