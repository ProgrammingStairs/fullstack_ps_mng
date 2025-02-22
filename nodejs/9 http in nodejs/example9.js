// example showing the concept of http module

var http = require('http');
var fs = require('fs');
var url = require('url');
var dotenv = require('dotenv');
dotenv.config();

const serverInstance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    const newResult = url.parse(request.url,true).query;
    console.log("result : ",newResult);
    const sum = parseInt(newResult.a)+parseInt(newResult.b);
    console.log("Sum : ",sum);
});

serverInstance.listen(process.env.PORT,()=>{
    console.log('Server connection successfull');
});