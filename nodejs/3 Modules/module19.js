// example showing the concept of modules | local modules

const status = {
    SUCCESS : 200,
    INTERNAL_SERVER_ERROR : 500,
    PAGE_NOT_FOUND : 404
}
const message = {
    LOGIN_ERROR : "EmailId or Password you entered is wrong",
    SUCCESS : "Task completed Successfully"
}
module.exports = {status,message}

// console.log(module);
//  console.log(module.exports);
// console.log(typeof module.exports);

