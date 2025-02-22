import express from 'express';
import dotenv from 'dotenv';

// var express = require('express');
var app = express();
dotenv.config();
// console.log(process);
// console.log(process.env);

app.get('/',(request,response)=>{
    //response.send("This is an example of express");
    //  response.json({status:200,message:"Executes Successfully"});
    response.status(200).send({status:200,message:"Executes Successfully"});
});

app.listen(process.env.PORT,()=>{
    console.log("Server connection established");
});