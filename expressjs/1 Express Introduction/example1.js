var express = require('express');
// console.log(typeof express);

var app = express();
// console.log(typeof app);

app.get('/',(request,response)=>{
    /*
    response.writeHead(200,{'content-type':'text/html'});
    console.log("This is an example of Express");
    response.write("This is an example of Express");
    response.write("<h1>This is an example of Express</h1>");
    response.end();
    */
    response.send("This is an example of Express<h1>This is an example of Express</h1>");
});

app.listen(5000,()=>{
    console.log("server connection successfull");
});
