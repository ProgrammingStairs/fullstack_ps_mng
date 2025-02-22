// example showing the concept of http module

var http = require('http');
var dotenv = require('dotenv');
dotenv.config();

// console.log(Object.getPrototypeOf(process).constructor.name);
// console.log(typeof Object.getPrototypeOf(process));

// console.log(process);

const serverInstance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("This  is an example of http module");
    response.write("<h1>This  is an example of http module</h1>");
    response.end();
});

serverInstance.listen(process.env.PORT,()=>{
    console.log('Server connection successfull');
});