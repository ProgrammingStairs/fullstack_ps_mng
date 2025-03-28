import { MongoClient } from "mongodb";
const url = 'mongodb://127.0.0.1:27017/';
async function myFun(){
    let dbInstance={};
    try{
       dbInstance = await MongoClient.connect(url);
       const db = await dbInstance.db("mymongodb");
       const firstArg = {
            name:'Jackson Jack'
       };
       const secondArg = {
            $set: {
                    name:'Jackson Jack Andy'
                }
            };
       const res = await db.collection("Employee").updateMany(firstArg,secondArg);

       console.log(res);
       console.log("Data updated successfully");
       
    }catch(error){
        console.log("Error : ",error);
    }finally{
        dbInstance.close();
    }
}
myFun();