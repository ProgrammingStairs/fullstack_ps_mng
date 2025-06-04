import mongoose from "mongoose";
import moment from "moment";
const forumSchema = mongoose.Schema({
    forumId:{
        type:String,
        required:true
    },
    alumniId:{
        type:String,
        required:true
    },
    forumTopic:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    messageStatus:{
        type:String,
        default:"Join Forum"
    },
    startDate:{
        type:String,
        default : ()=> moment().format("DD/MM/YYYY")
    },
    startTime:{
        type:String,
        default : ()=> moment().format("hh:mm:ss A")
    },
    status:{
        type:Boolean,
        default:true
    }
});

export default mongoose.model('forumSchema',forumSchema,'forum');