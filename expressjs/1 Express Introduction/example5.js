import express from 'express';
import dotenv from 'dotenv';
import url from 'url';

var app = express();
dotenv.config();
app.get('/',(request,response)=>{
    response.send('<h1>Home Page</h1>');
});
app.get('/operation',(request,response)=>{
    response.write('<h1>Operation Page</h1>');
    var obj = url.parse(request.url,true).query;
    response.write("<br>a : "+obj.a);
    response.write("<br>b : "+obj.b);
    response.write("<br>sum : "+(parseInt(obj.a)+parseInt(obj.b)));
    response.end();
});


app.listen(process.env.PORT,()=>{
    console.log("Server connection established");
});