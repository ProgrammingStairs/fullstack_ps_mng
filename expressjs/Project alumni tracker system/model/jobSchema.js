import mongoose from "mongoose";
import moment from 'moment';
const jobSchema = mongoose.Schema({
    jobId:{
        type:String,
        required:true
    },
    alumniId:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    post:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    vacancy:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    bond:{
        type:String,
        required:true
    },
    timings:{
        type:String,
        required:true
    },
    applyDate:{
        type:String,
        required:true
    },
    applyTillDate:{
        type:String,
        required:true
    },
    mode:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    postDate:{
        type:String,
        default : ()=> moment().format("DD/MM/YYYY")
    },
    postTime:{
        type:String,
        default : ()=> moment().format("hh:mm:ss A")
    },
    status:{
        type:Boolean,
        default: true
    }
});

export default mongoose.model('jobSchema',jobSchema,'job');