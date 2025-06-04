import mongoose from "mongoose";
import moment from "moment";
const eventConfirmationSchema = mongoose.Schema({
    eventConfirmationId:{
        type:String,
        required:true
    },
    eventId:{
        type:String,
        required:true
    },
    eventName:{
        type:String,
        required:true
    },
    alumniId:{
        type:String,
        required:true
    },
    alumniName:{
        type:String,
        required:true
    },
    acceptInvitationOn:{
        type:String,
        default:()=> moment().format('DD/MM/YYYY')
    },
    acceptInvitationAt:{
        type:String,
        default:()=> moment().format('hh:mm:ss A')
    },
    status:{
        type:Boolean,
        default:true
    }    
});

export default mongoose.model('eventConfirmationSchema',eventConfirmationSchema,'eventConfirmation');