// example showing the concept of http module

var fs = require('fs');
var http = require('http');
var url = require('url');
var qs = require('querystring');
var dotenv = require('dotenv');
const { log } = require('console');
dotenv.config();

const serverInstance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    const requestedURL= url.parse(request.url,true);
    if(requestedURL.pathname=='/' || requestedURL.pathname=='/home'){
        const data = fs.readFileSync('home.html','utf-8');
        response.write(data);
        response.end();
    }
    else if(requestedURL.pathname=='/register'){
        const data = fs.readFileSync('register.html','utf-8');
        response.write(data);
        response.end();
    }     
    else if(requestedURL.pathname=='/registerData'){
        /*
        const data = requestedURL.query;
        response.write("<br>Username : "+data.username);
        response.write("<br>Email : "+data.email);
        response.write("<br>Password : "+data.password);
        response.write("<br>Address : "+data.address);        
        response.end();
        */

        var chunkData = '';
        request.on('data',(chunk)=>{
            // console.log(chunk.toString());
            chunkData+=chunk;
        });
        request.on('end',()=>{
            // console.log("----> ",chunkData);
            const data = qs.parse(chunkData);
            console.log(typeof data);
            console.log(data);
            
            response.write("<br>Username : "+data.username);
            response.write("<br>Email : "+data.email);
            response.write("<br>Password : "+data.password);
            response.write("<br>Address : "+data.address);        
            response.end();
        });
    }     

});

serverInstance.listen(process.env.PORT,()=>{
    console.log('Server connection successfull');
});