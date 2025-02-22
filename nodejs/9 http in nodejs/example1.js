// example showing the concept of http module

var http = require('http');
const serverInstance = http.createServer((request,response)=>{
    console.log("This is my first example");
});

serverInstance.listen(5000);