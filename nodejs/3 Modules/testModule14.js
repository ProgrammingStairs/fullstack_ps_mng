// example showing the concept of modules | local modules

var data = require('./module14.js');
// console.log("data : ",data.myObj);
// console.log("typeof data.myObj : ",typeof data.myObj);
// console.log(data.myObj);
console.log("Name : ",data.myObj.name);
console.log("Salary : ",data.myObj.salary);
console.log("Age : ",data.myObj.age);
console.log("City : ",data.myObj.address.city);
console.log("State : ",data.myObj.address.state);
console.log("Country : ",data.myObj.address.country);
console.log("Pincode : ",data.myObj.pincode);


