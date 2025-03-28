import express from 'express';
import dotenv from 'dotenv';
import indexRouter from './router/indexRouter.js';
import mongoose from 'mongoose';
import url from './connection/dbConfig.js';
mongoose.connect(url);
dotenv.config();

var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/index',indexRouter);

app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});