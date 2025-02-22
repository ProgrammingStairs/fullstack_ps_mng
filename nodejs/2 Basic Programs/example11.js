// example showing the concept of Promise
/*
function getSimpleInterest(p,r,t){
    return new Promise((resolve,reject)=>{
        resolve((p*r*t)/100);
    });
}
var promiseObj = getSimpleInterest(1000,5.33,2);
promiseObj.then((result)=>{
    console.log("Simple Interest : ",result);
}).catch((error)=>{
    console.log("Error occured : ",error);
});
*/

// example showing the concept of Async Await

function getSimpleInterest(p,r,t){
    return new Promise((resolve,reject)=>{
        resolve((p*r*t)/100);
    });
}

async function myFun(){
    try{
        var result = await getSimpleInterest(3200,5.33,2);
        console.log("Simple Interest : ",result);
    }catch(error){
        console.log(error);
    }
}
myFun();

