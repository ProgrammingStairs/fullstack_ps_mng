import { DataTypes } from "sequelize";
import sequelize from "../connection/dbConfig.js";
var student = sequelize.define("student",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        unique:true,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,  
        validate: {
            notEmpty: true
        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    } 
},{tableName:"student"});

student.sequelize.sync().then(()=>{
    console.log("Table created successfully");
}).catch((error)=>{
    console.log("Error : ",error);
});

export default student;