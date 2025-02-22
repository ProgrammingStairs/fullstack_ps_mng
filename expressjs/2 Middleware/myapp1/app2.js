import express from 'express';
var app = express();

const myFun1 = function(request,response,next){
    response.writeHead(200,{'content-type':'text/html'});
    response.write("This is an example of Middleware");
    response.write("<h1>Middleware1</h1>");
    next();
};
const myFun2 = function(request,response,next){
    response.write("This is an example of Middleware");
    response.write("<h1>Middleware2</h1>");
    next();
};
app.get('/',myFun1,myFun2,(request,response)=>{
    response.write("<h2>Statement Over</h2>");
    response.end();
});

app.listen(5000,()=>{
    console.log("Server connnection established");
});