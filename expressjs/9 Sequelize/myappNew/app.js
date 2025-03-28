import express from 'express';
import dotenv from 'dotenv';
import indexRouter from './routes/index.js';
dotenv.config();
var app = express();

app.set("views","views");
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',indexRouter);

app.listen(process.env.PORT,()=>{
  console.log("Server connection successfull");
}); 