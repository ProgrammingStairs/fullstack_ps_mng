// example showing the concept of http module

var http = require('http');
var fs = require('fs');
var dotenv = require('dotenv');
dotenv.config();

const serverInstance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    if(request.url=='/' || request.url=='/home'){
        const data = fs.readFileSync('index.html','utf-8');
        response.write(data);
        response.end();
    }
    
    else if(request.url=='/about'){
        const data = fs.readFileSync('about.html');
        response.write(data);
        response.end();
    }
    
    else if(request.url=='/services'){
        const data = fs.readFileSync('services.html');
        response.write(data);
        response.end();
    }
    
    else if(request.url=='/contact'){
        const data = fs.readFileSync('contact.html');
        response.write(data);
        response.end();
    }    
});

serverInstance.listen(process.env.PORT,()=>{
    console.log('Server connection successfull');
});