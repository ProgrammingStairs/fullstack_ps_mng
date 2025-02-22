// Application level middleware | Top level middleware
import express from 'express';
var app = express();

const myFun1 = function(request,response,next){
    response.write("This is an example of Middleware");
    response.write("<h1>Middleware1</h1>");
    next();
};
const myFun2 = function(request,response,next){
    response.write("This is an example of Middleware");
    response.write("<h1>Middleware2</h1>");
    // next();
    response.end();
};

app.get('/',(request,response,next)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("<h2>Home Page</h2>");
    next();
    // response.end();
});
app.get('/about',(request,response,next)=>{
    response.write("<h2>About Page</h2>");
    next();
    // response.end();
});

app.use(myFun1); // Application level middleware | Top level middleware
app.use(myFun2); // Application level middleware | Top level middleware

app.listen(5000,()=>{
    console.log("Server connnection established");
});