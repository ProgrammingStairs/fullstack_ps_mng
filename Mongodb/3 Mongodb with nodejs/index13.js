import { MongoClient } from "mongodb";
const url = 'mongodb://127.0.0.1:27017/';
async function myFun(){
    let dbInstance={};
    try{
       dbInstance = await MongoClient.connect(url);
       const db = await dbInstance.db("mymongodb");
    //    const res = await db.collection("Employee").find().limit(2).toArray();
    const res = await db.collection("Employee").find().skip(1).limit(1).toArray();

    console.log(res);
       
       
    }catch(error){
        console.log("Error : ",error);
    }finally{
        dbInstance.close();
    }
}
myFun();