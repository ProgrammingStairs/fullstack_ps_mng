// concept of third party middleware
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import {fileURLToPath} from 'url';
var app = express();

var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(request,response)=>{
    response.sendFile(__dirname+"/index.html");
});
app.get('/register',(request,response)=>{
    response.sendFile(__dirname+"/register.html");
});
// when method is get
// app.get('/viewDetails',(request,response)=>{
//     response.writeHead(200,{'content-type':'text/html'});
//     // console.log(request.query);
//     response.write("Username : "+request.query.username);
//     response.write("<br>Email : "+request.query.email);
//     response.write("<br>EnrollId : "+request.query.enrollId);
//     response.end();
// });

//when method is post
app.post('/viewDetails',(request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    // console.log(request.query);
    response.write("Username : "+request.body.username);
    response.write("<br>Email : "+request.body.email);
    response.write("<br>EnrollId : "+request.body.enrollId);
    response.end();
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});