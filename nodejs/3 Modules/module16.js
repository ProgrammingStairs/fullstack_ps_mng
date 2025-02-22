// example showing the concept of modules | local modules

function Employee(){
    this.name='Andrew Anderson',
    this.salary=20000,
    this.age=45,
    this.address={
        city:'Indore',
        state:'MP',
        country:'India'
    },
    this.pincode=452010
}
const empObj = new Employee();
module.exports.obj = empObj; // named export

// console.log(module);
 console.log(module.exports);
// console.log(typeof module.exports);

