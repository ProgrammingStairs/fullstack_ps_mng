import express from 'express';
import dotenv from 'dotenv';
import userRouter from './router/userRouter.js';
var app = express();
dotenv.config();

app.set("views","views");
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(request,response)=>{
    response.render("home.ejs");
});
app.get('/login',(request,response)=>{
    response.render("login.ejs");
});
app.get('/register',(request,response)=>{
    response.render("register.ejs");
});
app.use('/user',userRouter);

app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});