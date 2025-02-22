import express from 'express';
var app = express();

app.get('/',function(request,response,demo){
    response.writeHead(200,{'content-type':'text/html'});
    response.write("This is an example of Middleware");
    response.write("<h1>Middleware1</h1>");
    demo();
},function(request,response,demoagain){
    response.write("This is an example of Middleware");
    response.write("<h1>Middleware2</h1>");
    demoagain();
},(request,response)=>{
    response.write("<h2>Statement Over</h2>");
    response.end();
});

app.listen(5000,()=>{
    console.log("Server connnection established");
});