// example showing the concept of modules | local modules

var data = require('./module13.js');
// console.log("data : ",data);
// console.log("typeof data : ",typeof data);
// console.log(data);
console.log("Name : ",data.name);
console.log("Salary : ",data.salary);
console.log("Age : ",data.age);
console.log("City : ",data.address.city);
console.log("State : ",data.address.state);
console.log("Country : ",data.address.country);
console.log("Pincode : ",data.pincode);


