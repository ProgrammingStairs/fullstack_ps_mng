import express from 'express';
import dotenv from 'dotenv';
import indexRouter from './router/indexRouter.js';
import { url } from './connection/dbConfig.js';
import mongoose from 'mongoose';

mongoose.connect(url);
dotenv.config();
var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("views","views");
app.set("view engine","ejs");

app.get('/',(request,response)=>{
    response.render("index.ejs");
});
app.use('/index',indexRouter);

app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});