import express from 'express';
import dotenv from 'dotenv';

var app = express();
dotenv.config();
app.get('/',(request,response)=>{
    response.send('<h1>Home Page</h1>');
});
app.post('/about',(request,response)=>{
    response.send('<h1>About Page</h1>');
});
app.put('/contact',(request,response)=>{
    response.send('<h1>Contact Page</h1>');
});
app.delete('/services',(request,response)=>{
    response.send('<h1>Services Page</h1>');
});
app.listen(process.env.PORT,()=>{
    console.log("Server connection established");
});