import mongoose from "mongoose";
const eventSchema = mongoose.Schema({
    eventId:{
        type:String,
        required:true
    },
    eventName : {
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    typeOfEvent:{
        type:String,
        required:true
    },
    criteria:{
        type:String,
        required:true
    },
    modeOfApply:{
        type:String
    },
    startDateToApply:{
        type:String
    },
    lastDateToApply:{
        type:String
    },
    uploadDate:{
        type:String,
        required:true
    },
    uploadTime:{
        type:String,
        required:true
    },
    inviteBTNMessage:{
        type:String,
        default : 'Accept Invitation'
    },
    status:{
        type:Boolean,
        default : true
    }
});

export default mongoose.model('eventSchema',eventSchema,'event');