import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
var app = express();

var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename);
app.use(express.static(__dirname+'/public'));

app.get('/',(request,response)=>{
    response.sendFile(__dirname+"/home.html");
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});