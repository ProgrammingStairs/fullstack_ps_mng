import mongoose from "mongoose";
import moment from "moment";
const gallerySchema = mongoose.Schema({
    galleryId : {
        type:String,
        required:true
    },
    eventId:{
        type:String,
        required:true
    },
    images:{
        type:[String],
        required:true
    },
    uploadDate : {
        type: String,
        default : ()=> moment().format("DD/MM/YYYY")
    },
    uploadTime : {
        type: String,
        default : ()=> moment().format("hh:mm:ss A")
    },    
    status:{
        type:Boolean,
        default:true
    }
});

export default mongoose.model('gallerySchema',gallerySchema,'gallery');