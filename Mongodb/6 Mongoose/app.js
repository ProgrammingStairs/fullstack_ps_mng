import mongoose from "mongoose";
const url = 'mongodb://127.0.0.1:27017/newmongodb';
mongoose.connect(url);
const student = mongoose.Schema({
    username : {
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

const Student = mongoose.model('student',student,'student');
console.log(typeof Student);

const obj = {
    username:"Andrew Anderson",
    email:"andrew3@gmail.com",
    password:"andrew@123456",
    address:"indore"
}
const stud = new Student(obj);
stud.save();
console.log("Data inserted successfully");


