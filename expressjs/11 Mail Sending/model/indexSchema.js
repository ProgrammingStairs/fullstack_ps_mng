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
    gender:{
        type:String,
        required:true
    },
    hobbies:{
        type:[String],
        required:true
    },
    address:{
        type:String,
        required:true
    },
    emailVerify:{
        type:String,
        default:'Not Verified'
    },
    status:{
        type:Boolean,
        default:true
    }
});

export default mongoose.model('employee',employeeSchema,'employee');