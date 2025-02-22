// program showing the concept of Promise
/*
function myData(){
    return new Promise((resolve,reject)=>{
        var obj = {
            name:"Andrew Anderson",
            age:45,
            salary:78000
        }
        resolve(obj);
    });
}
const data = myData();
data.then(function dataAgain(obj){
    return new Promise((resolve,reject)=>{
        var hobbies = ['Cricket','Football','Badminton'];
        obj.hobbies = hobbies;
        resolve(obj);
    });
}).then((obj)=>{
    console.log("Name : ",obj.name);
    console.log("Age : ",obj.age);
    console.log("Salary : ",obj.salary);
    console.log("Hobbies : ",obj.hobbies);    
}).catch((error)=>{
    console.log("Error : ",error);
});
*/

// Example showing the concept of async await
function myData(){
    return new Promise((resolve,reject)=>{
        var obj = {
            name:"Andrew Anderson",
            age:45,
            salary:78000
        }
        resolve(obj);
    });
}
function dataAgain(obj){
    return new Promise((resolve,reject)=>{
        var hobbies = ['Cricket','Football','Badminton'];
        obj.hobbies = hobbies;
        resolve(obj);
    });
}

async function myFun(){
    try{
        var obj = await myData();
        var modifyObj = await dataAgain(obj);
        console.log("Name : ",modifyObj.name);
        console.log("Age : ",modifyObj.age);
        console.log("Salary : ",modifyObj.salary);
        console.log("Hobbies : ",modifyObj.hobbies);  
    }catch(error){
        console.log("Error : ",error);
    }
}
myFun();