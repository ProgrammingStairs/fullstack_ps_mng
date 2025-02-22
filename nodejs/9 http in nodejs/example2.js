// example showing the concept of http module

var http = require('http');
const serverInstance = http.createServer((request,response)=>{
    console.log("This is my first example");
    response.write("This  is an example of http module");
    response.end();
});

serverInstance.listen(5000,()=>{
    console.log('Server connection successfull');
});