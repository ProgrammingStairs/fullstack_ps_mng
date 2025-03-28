import { MongoClient } from "mongodb";
const url = 'mongodb://127.0.0.1:27017/';
async function myFun(){
    let dbInstance={};
    try{
       dbInstance = await MongoClient.connect(url);
       const db = await dbInstance.db("newdb");
       const result = await db.collection("product").aggregate([{
        $lookup:{
            from: 'category',
            foreignField:'cat_id',
            localField:'category_id',
            as:"Product Details"
        }
       }]).toArray(); 
    //    console.log(result);
       for(var index in result){
        console.log(result[index]);
        // console.log(JSON.stringify(result[index]));
       }
    }catch(error){
        console.log("Error : ",error);
    }finally{
        dbInstance.close();
    }
}
myFun();