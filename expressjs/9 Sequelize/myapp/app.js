import express from 'express';
// import mysql from 'mysql2';
import { DataTypes, Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
var app = express();

var sequelize = new Sequelize(
    'seqdb',
    'root',
    'root',
    {
      host:"localhost",
      dialect:'mysql'  
    }
);
sequelize.authenticate().then(()=>{
    console.log("Connection established successfully");
}).catch((error)=>{
    console.log("Error while connecting : ",error);
});

var student = sequelize.define("student",{
    sid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(45),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{tableName : "student"});

student.sequelize.sync().then(()=>{
    // console.log("Table created successfully");
    // insert single record
    /*
    var payload = {
        name : "Andrew Anderson",
        email: "andrew@gmail.com",
        password: "andrew@12345678"
    }
    student.create(payload).then(()=>{
        console.log("Data inserted successfully");
    }).catch((error)=>{
        console.log("Error while creating entry : ",error);
    });
    */

    /*
    // insert multiple record
    var payload = [{
        name : "Mathew Math",
        email: "mathew@gmail.com",
        password: "mathew@12345678"
    },{
        name : "Jackson Jack",
        email: "jackson@gmail.com",
        password: "jackson@12345678"
    },{
        name : "Peter Parker",
        email: "peter@gmail.com",
        password: "peter@12345678"
    }]
    student.bulkCreate(payload).then(()=>{
        console.log("Data inserted successfully");
    }).catch((error)=>{
        console.log("Error while creating entry : ",error);
    });
    */
   /*
    student.findOne().then((result)=>{
        console.log(result.get({plain:true}));
    }).catch((error)=>{
        console.log("Error in findOne : ",error);
    });
*/
/*
student.findOne({
    where : {
        sid:2
    }
}).then((result)=>{
    console.log(result.get({plain:true}));
}).catch((error)=>{
    console.log("Error in findOne : ",error);
});
*/
/*
student.findAll().then((result)=>{
    // console.log(result);
    for(var i=0;i<result.length;i++){
             console.log(result[i].dataValues);
    }
    }).catch((error)=>{
        console.log("Error in findAll : ",error);
});
*/
/*
student.destroy({
    where : {
        sid:1
    }
}).then((result)=>{
    console.log("Data deleted successfully : ",result);
}).catch((error)=>{
    console.log("Error in destroy : ",error);
});
*/

student.update({
        name:'Andrew anderson',
        password:'andrew@12345678'
    },{
    where : {
        name:'Andy'
    }
}).then((result)=>{
    console.log("Data Updated successfully : ",result[0]);
}).catch((error)=>{
    console.log("Error in update : ",error);
});


}).catch((error)=>{
    console.log("Error while dealing with table : ",error);
});
app.listen(process.env.PORT,()=>{
    console.log("Server connection established");
});
