import express from 'express';
import dotenv from 'dotenv';
import userRouter from './router/userRouter.js';
import adminRouter from './router/adminRouter.js';
import { checkDatabase } from './model/util.js';
import { adminDatabase } from './model/adminUtil.js';
import expressSession from 'express-session';
import { checkToDoDatabase } from './model/todoUtil.js';
var app = express();
dotenv.config();

app.set("views","views");
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(expressSession({secret:process.env.SECRET,resave:true,saveUninitialized:true}));
app.use(express.json());
app.use(checkDatabase);
app.use(adminDatabase);
app.use(checkToDoDatabase);

app.get('/',(request,response)=>{
    response.render("home.ejs");
});
app.get('/login',(request,response)=>{
    response.render("login.ejs",{message:""});
});
app.get('/register',(request,response)=>{
    response.render("register.ejs");
});
app.get('/adminLogin',(request,response)=>{
    response.render("adminLogin.ejs");
});
app.use('/user',userRouter);
app.use('/admin',adminRouter);

app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});