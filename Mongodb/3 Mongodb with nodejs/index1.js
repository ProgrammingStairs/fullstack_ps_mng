import { MongoClient } from "mongodb";
var url = 'mongodb://127.0.0.1:27017/';

// async function myFun(){
//     await MongoClient.connect(url);
//     console.log("Connection established successfully");
// }
// myFun();

async function myFun(){
    const dbInstance = await MongoClient.connect(url);
    console.log(dbInstance);
    
    console.log("Connection established successfully");
    dbInstance.close();
}
myFun();