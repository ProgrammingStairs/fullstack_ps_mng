import { MongoClient } from "mongodb";
const url = 'mongodb://127.0.0.1:27017/';
async function myFun(){
    let dbInstance={};
    try{
       dbInstance = await MongoClient.connect(url);
       const db = dbInstance.db("anotherdb");
    //    console.log(db);
       const res = await db.dropDatabase(); 
    //   console.log(res);
      console.log("Database deleted successfully");
       
    }catch(error){
        console.log("Error : ",error);
    }finally{
        dbInstance.close();
    }
}
myFun();