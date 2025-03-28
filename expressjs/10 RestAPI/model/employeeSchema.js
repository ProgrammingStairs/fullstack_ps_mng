import mongoose from "mongoose";
const employee = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    _id:{
        type:String,
        required:true,
        unique:true
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

export default mongoose.model('employee',employee,'employee');