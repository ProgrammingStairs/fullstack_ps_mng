// example showing the concept of http module

var http = require('http');
var fs = require('fs');
var dotenv = require('dotenv');
dotenv.config();

const serverInstance = http.createServer((request,response)=>{
    if(request.url=='/' || request.url=='/home'){
        response.writeHead(200,{'content-type':'text/html'});
        const data = fs.readFileSync('index.html','utf-8');
        response.write(data);
        response.end();
    }
    
    else if(request.url.match('\.png$')){
        response.writeHead(200,{'content-type':'image/png'});
        const data = fs.createReadStream('public/images/p1.png');     
        data.pipe(response);
    }

    else if(request.url.match('\.css$')){
        response.writeHead(200,{'content-type':'text/css'});
        const data = fs.createReadStream('public/css/style1.css');     
        data.pipe(response);
    }

});

serverInstance.listen(process.env.PORT,()=>{
    console.log('Server connection successfull');
});