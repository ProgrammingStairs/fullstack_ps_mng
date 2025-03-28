import { MongoClient } from "mongodb";
const url = 'mongodb://127.0.0.1:27017/';
async function myFun(){
    let dbInstance={};
    try{
       dbInstance = await MongoClient.connect(url);
       const db = await dbInstance.db("mymongodb");
       const firstArg = {
            name:'Mathew Math'
       };
       const res = await db.collection("Employee").deleteMany(firstArg);

       console.log(res);
       res.deletedCount==0 ? console.log("Data not found") : console.log('Data deleted successfully');
       
       
    }catch(error){
        console.log("Error : ",error);
    }finally{
        dbInstance.close();
    }
}
myFun();