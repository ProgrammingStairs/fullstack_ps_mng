// program showing the concept of Promise

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
var againData = (obj)=>{
    console.log("Name : ",obj.name);
    console.log("Age : ",obj.age);
    console.log("Salary : ",obj.salary);
    console.log("Hobbies : ",obj.hobbies);    
}
const data = myData();
data.then(dataAgain)
    .then(againData)
        .catch((error)=>{
            console.log("Error : ",error);
        });


