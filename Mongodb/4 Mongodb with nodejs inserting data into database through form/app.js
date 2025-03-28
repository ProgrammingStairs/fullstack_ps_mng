import http from 'http';
import url from 'url';
import fs from 'fs';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
const mongodbUrl = 'mongodb://127.0.0.1:27017/';
dotenv.config();

const instance = http.createServer(async(request,response)=>{
    const requestedURL = url.parse(request.url,true);
    if(requestedURL.pathname=='/'){
        const data = fs.readFileSync('index.html');
        response.write(data);
        response.end();
    }
    if(requestedURL.pathname=='/viewInfo'){
        const dbInstance = await MongoClient.connect(mongodbUrl);
        const db = dbInstance.db("newnodedb");
        const res = await db.createCollection("user");
        // console.log("create collection : ",res);
        const result = await db.collection("user").insertOne(requestedURL.query);
        // console.log("result : ",result);
        console.log("Data inserted successfully");
        response.write("Data inserted successfully");
        response.end();
    }
});

instance.listen(process.env.PORT,()=>{
    console.log("Connection established Successfully");
});

/*
method = get
localhost:3000/viewInfo?username=AndrewAnderson&email=andrew@gmail.com

var requestedURL = url.parse(request.url) 
requestedURL.pathname => /viewInfo

var requestedURL = url.parse(request.url) 
requestedURL.query => username=AndrewAnderson&email=andrew@gmail.com = string

var requestedURL = url.parse(request.url,true) 
requestedURL.query => 
    { 
        username:AndrewAnderson,
        email:andrew@gmail.com
    } = object

    */