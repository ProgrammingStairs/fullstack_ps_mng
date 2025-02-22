// example showing the concept of http module

var http = require('http');
var dotenv = require('dotenv');
dotenv.config();

const serverInstance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    if(request.url=='/' || request.url=='/home')
            response.write('<h1>Home Page</h1>');

    else if(request.url=='/about')
            response.write('<h1>About Page</h1>');
    
    else if(request.url=='/services')
        response.write('<h1>Services Page</h1>');
    
    else if(request.url=='/contact')
        response.write('<h1>Contact Page</h1>');
    
    else if(request.url=='/feedback')
        response.write('<h1>Feedback Page</h1>');
    
    response.end();
});

serverInstance.listen(process.env.PORT,()=>{
    console.log('Server connection successfull');
});