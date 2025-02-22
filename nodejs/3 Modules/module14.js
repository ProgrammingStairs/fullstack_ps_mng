// example showing the concept of modules | local modules

const obj = {
    name:'Andrew Anderson',
    salary:20000,
    age:45,
    address:{
        city:'Indore',
        state:'MP',
        country:'India'
    },
    pincode:452010
}
module.exports.myObj = obj;

// console.log(module);
 console.log(module.exports);
// console.log(typeof module.exports);

