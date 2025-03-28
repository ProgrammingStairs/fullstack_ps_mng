import { MongoClient } from "mongodb";
var url = 'mongodb://127.0.0.1:27017/';

async function myFun(){
    const dbInstance = await MongoClient.connect(url);
    // console.log(dbInstance);
    console.log("Connection established successfully");
    const db = dbInstance.db("mymongodb");
    console.log("Database created successfully");
    dbInstance.close();
}
myFun();