
// https://www.geeksforgeeks.org/json-web-token-jwt/
// https://medium.com/@sangiri15sivam/jwt-d848bd9a0c23

import express from 'express';
import dotenv from 'dotenv';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
dotenv.config();

var app = express();
const SECRET_KEY = process.env.SECRET_KEY;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
// const res = crypto.randomBytes(32).toString('hex');
// console.log("secret key : ",res);

app.get('/',(request,response)=>{
    response.render("index.ejs");
});
app.get('/login',(request,response)=>{
    response.render("login.ejs");
});

app.post('/login',(request,response)=>{
    const {email,password} = request.body;
    // console.log(request.body);
    if(request.body.email=="admin@gmail.com" && request.body.password=="admin@12345")
        request.body.role = "admin";
    else
        request.body.role = "user"; 
    const expiryTime = {
        expiresIn : "1m"
    }
    const token = jwt.sign(request.body,SECRET_KEY,expiryTime);
    console.log("token : ",token);
    response.cookie('jwt',token,{httpOnly:true});
    // response.cookie('jwt',token);
    response.redirect('/profile');
});

const authenticateJWT = (request,response,next)=>{
    try{
        const token = request.cookies.jwt;
        console.log("token : ",token);
        
        if(!token)
            response.json({message:"Error while dealing with Token"});
        else{
            jwt.verify(token,SECRET_KEY,(error,payload)=>{
                if(error)
                    console.log("Error occured while verifying token : ",error);
                else{
                    request.payload = payload;
                    next();
                }                
            });    
        }
    }catch(error){
        console.log("Error occured : ",error);
    }
}
const authorizeJWT = (request,response,next)=>{
    try{
        if(request.payload.role=="admin")
            response.render("admin.ejs",{email:request.payload.email});
        else
            response.render("user.ejs",{email:request.payload.email});
        next();
    }catch(error){
        console.log("Error while authorize jwt : ",error);
    }
}
app.get("/profile",authenticateJWT,authorizeJWT,(request,response)=>{
    console.log("Task Completed");
});
app.listen(process.env.PORT,()=>{
    console.log("Server connection successfull");
});