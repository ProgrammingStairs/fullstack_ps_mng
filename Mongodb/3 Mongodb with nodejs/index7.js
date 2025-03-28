import { MongoClient } from "mongodb";
const url = 'mongodb://127.0.0.1:27017/';
async function myFun(){
    let dbInstance={};
    try{
       dbInstance = await MongoClient.connect(url);
       const db = await dbInstance.db("mymongodb");
       const obj = [
            {
                name:"Mathew Math",
                age:43,
                address:'Ujjain',
                salary : 55000
            },{
                name:"Jackson Jack",
                age:27,
                address:'Bhopal',
                salary : 75000
            },{
                name:"Peter Parker",
                age:21,
                address:'Jabalpur',
                salary : 25000
            }
       ]
       const res = await db.collection("Employee").insertMany(obj);
       console.log(res);
       console.log("Data Inserted Successfully");
    }catch(error){
        console.log("Error : ",error);
    }finally{
        dbInstance.close();
    }
}
myFun();