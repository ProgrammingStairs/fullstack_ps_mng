import mongoose from "mongoose";
const employeeNewSchema = mongoose.Schema({
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
    profileOne:{
        type:[String],
        required:true
    },
    profileTwo:{
        type:[String],
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

export default mongoose.model('employeeNew',employeeNewSchema,'employeeNew');