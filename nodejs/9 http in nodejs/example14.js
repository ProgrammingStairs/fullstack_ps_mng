// example showing the concept of http module

var http = require('http');
var url = require('url');
var dotenv = require('dotenv');
dotenv.config();

const serverInstance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    const requestedURL= url.parse(request.url).pathname;
    if(requestedURL=='/' || requestedURL=='/home' && request.method=='GET')
            response.write('<h1>Home Page</h1>');

    else if(requestedURL=='/about' && request.method=='POST')
            response.write('<h1>About Page</h1>');
    
    else if(requestedURL=='/services' && request.method=='PUT')
        response.write('<h1>Services Page</h1>');
    
    else if(requestedURL=='/contact' && request.method=='DELETE')
        response.write('<h1>Contact Page</h1>');
    
    response.end();
});

serverInstance.listen(process.env.PORT,()=>{
    console.log('Server connection successfull');
});