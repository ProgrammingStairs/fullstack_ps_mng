// Error Handling middleware
import express from 'express';
var app = express();

app.get('/',(request,response,next)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("<h2>Home Page</h2>");
    const error = new Error("Error Occured");
    next(error);
});

app.use(function(error,request,response,next){
    response.write("<br><h4>"+error+"</h4>");
    response.end();
});

app.listen(5000,()=>{
    console.log("Server connnection established");
});