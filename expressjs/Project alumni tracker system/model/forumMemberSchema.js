import mongoose from "mongoose";
import moment from "moment";
const forumMemberSchema = mongoose.Schema({
    forumMemberId : {
        type:String,
        required:true
    },
    forumId : {
        type:String,
        required:true
    },
    alumniId : {
        type:String,
        required:true
    },
    joinDate : {
        type:String,
        default : ()=> moment().format("DD/MM/YYYY") 
    },
    joinTime : {
        type:String,
        default : ()=> moment().format("hh:mm:ss A") 
    },
    status:{
        type:Boolean,
        default : true 
    }
});

export default mongoose.model('forumMemberSchema',forumMemberSchema,'forumMember');