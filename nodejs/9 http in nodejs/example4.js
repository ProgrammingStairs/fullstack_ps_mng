// example showing the concept of http module

var http = require('http');
var dotenv = require('dotenv');
dotenv.config();

const serverInstance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    console.log("request.url : ",request.url);
    console.log("request.method : ",request.method);
    console.log("request.headers : ",request.headers);
    console.log("request.headers.host : ",request.headers.host);
        
    response.end();
});

serverInstance.listen(process.env.PORT,()=>{
    console.log('Server connection successfull');
});