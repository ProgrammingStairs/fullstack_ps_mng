// example showing the concept of http module

var http = require('http');
var url = require('url');
var dotenv = require('dotenv');
dotenv.config();

const serverInstance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});

    // we are giving this type of data in url ----> localhost:5000/home?a=100&b=200

    const requestedURL= url.parse(request.url).pathname;
    if(requestedURL=='/' || requestedURL=='/home')
            response.write('<h1>Home Page</h1>');

    else if(requestedURL=='/about')
            response.write('<h1>About Page</h1>');
    
    else if(requestedURL=='/services')
        response.write('<h1>Services Page</h1>');
    
    else if(requestedURL=='/contact')
        response.write('<h1>Contact Page</h1>');
    
    else if(requestedURL=='/feedback')
        response.write('<h1>Feedback Page</h1>');
    
    response.end();
});

serverInstance.listen(process.env.PORT,()=>{
    console.log('Server connection successfull');
});