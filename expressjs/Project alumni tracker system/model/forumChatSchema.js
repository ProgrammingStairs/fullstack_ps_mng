import moment from "moment";
import mongoose from "mongoose";
const forumChatSchema = mongoose.Schema({
    forumChatId:{
        type:String,
        required:true
    },
    forumId:{
        type:String,
        required:true
    },
    alumniId:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    sentTime:{
        type:String,
        default:()=> moment().format("hh:mm:ss A")
    },
    sentDate:{
        type:String,
        default:()=> moment().format("DD/MM/YYYY")
    },
    report:{
        type:Boolean,
        default:false
    },
    status:{
        type:Boolean,
        default:true
    }
});

export default mongoose.model('forumChatSchema',forumChatSchema,'forumChat');