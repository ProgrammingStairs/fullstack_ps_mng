import mongoose from "mongoose";
const employeeSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    }
});

export default mongoose.model('employee',employeeSchema,'employee');