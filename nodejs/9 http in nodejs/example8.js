// example showing the concept of http module

var http = require('http');
var fs = require('fs');
var url = require('url');
var dotenv = require('dotenv');
dotenv.config();

const serverInstance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    const result = url.parse(request.url);
    console.log("result : ",result);
    console.log("typeof result : ",typeof result);

    const resultNew = url.parse(request.url).query;
    console.log("result : ",resultNew);
    console.log("typeof result : ",typeof resultNew);
    
    const newResult = url.parse(request.url,true).query;
    console.log("result : ",newResult);
    console.log("typeof result : ",typeof newResult);

});

serverInstance.listen(process.env.PORT,()=>{
    console.log('Server connection successfull');
});