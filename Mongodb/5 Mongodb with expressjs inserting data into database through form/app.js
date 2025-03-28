import express from 'express';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
const mongodbUrl = 'mongodb://127.0.0.1:27017/';
dotenv.config();
const app = express();
app.set("views","views");
app.set("view engine","ejs");

app.get('/',(request,response)=>{
    response.render("index.ejs",{message:""});
});
app.get('/viewInfo',async(request,response)=>{
        const dbInstance = await MongoClient.connect(mongodbUrl);
        const db = dbInstance.db("newnodedb");
        const res = await db.createCollection("user");
        // console.log("create collection : ",res);
        const result = await db.collection("user").insertOne(request.query);
        // console.log("result : ",result);
        console.log("Data inserted successfully");
        response.render("index.ejs",{message:"Data Inserted Successfully"});
});

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
})


