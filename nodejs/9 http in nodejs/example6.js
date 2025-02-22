// example showing the concept of http module

var http = require('http');
var fs = require('fs');
var dotenv = require('dotenv');
dotenv.config();

const serverInstance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});

    // we are giving this type of data in url ----> localhost:5000/home

    if(request.url=='/' || request.url=='/home'){
        fs.readFile('index.html',(error,data)=>{
                if(error)
                    console.log("Error : ",error);
                else{
                    response.write(data);
                    response.end();
                }
        })
    }

    else if(request.url=='/about'){
        fs.readFile('about.html',(error,data)=>{
            if(error)
                console.log("Error : ",error);
            else{
                response.write(data);
                response.end();
            }
        })
    }
    
    else if(request.url=='/services'){
        fs.readFile('services.html',(error,data)=>{
            if(error)
                console.log("Error : ",error);
            else{
                response.write(data);
                response.end();
            }
        })
    }
    
    else if(request.url=='/contact'){
        fs.readFile('contact.html',(error,data)=>{
            if(error)
                console.log("Error : ",error);
            else{
                response.write(data);
                response.end();
            }
        })
    }    
});

serverInstance.listen(process.env.PORT,()=>{
    console.log('Server connection successfull');
});