import mysql from 'mysql2';
const con = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    port:process.env.DB_PORT
});

con.connect((error)=>{
    if(error)
        console.log("Error while dealing with MySql");
    else
        console.log("Database connection Successfull");
});

export default con;