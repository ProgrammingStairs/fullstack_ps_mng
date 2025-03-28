import { MongoClient } from "mongodb";
const url = 'mongodb://127.0.0.1:27017/';
async function myFun(){
    let dbInstance={};
    try{
       dbInstance = await MongoClient.connect(url);
       const db = await dbInstance.db("newdb");
    const res = await db.collection("Employee").find().sort({salary:-1}).toArray();    
    // console.log(res);
    const salary = res[0].salary;   
    console.log("Highest Salary : ",salary);

    const res1 = await db.collection("Employee").find({salary:{$ne:salary}}).sort({salary:-1}).toArray();    
    const salary1 = res1[0].salary;   
    console.log("Second Highest Salary : ",salary1);

    const res2 = await db.collection("Employee").find({salary:salary1}).toArray();    
        console.log(res2);
        

    }catch(error){
        console.log("Error : ",error);
    }finally{
        dbInstance.close();
    }
}
myFun();