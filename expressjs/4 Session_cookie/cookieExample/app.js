import express from 'express';
import cookieParser from 'cookie-parser';
var app = express();
app.use(cookieParser());

app.get("/",(request,response)=>{
    response.cookie('cookieName','cookieValue',{maxAge:360000});
    response.send("setting up of cookie is done");
});

app.get("/viewCookies",(request,response)=>{
    response.send(request.cookies);
});

app.get("/deleteCookie",(request,response)=>{
    response.clearCookie("cookieName");
    response.send("Cookie deleted successfully");
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});