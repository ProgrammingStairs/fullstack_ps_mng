import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
const con = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE_NAME,
    port:process.env.DB_PORT
});

con.connect((error)=>{
    if(error)
        console.log("Error while dealing with MySql : ",error);
    else
        console.log("Database connection Successfull");
});

export default con;