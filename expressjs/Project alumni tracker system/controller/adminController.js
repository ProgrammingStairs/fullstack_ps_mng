import adminSchema from "../model/adminSchema.js";
import bcrypt from 'bcrypt';
import { message, status } from "../utils/statusMessage.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import uuid from 'uuid4';
import moment from 'moment';
import eventSchema from "../model/eventSchema.js";
import alumniSchema from "../model/alumniSchema.js";
import jobSchema from "../model/jobSchema.js";
import forumSchema from "../model/forumSchema.js";
import eventConfirmationSchema from "../model/eventConfirmationSchema.js";
import uuid4 from "uuid4";
import gallerySchema from "../model/gallerySchema.js";
dotenv.config();
const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY;
export const adminLoginController = async (request,response)=>{
    try{
        const {email,password} = request.body;
        console.log("Email : ",email);
        console.log("Password : ",password);
        const adminObj = await adminSchema.findOne({email});
        console.log("adminObj : ",adminObj);
        
        const adminEmail = adminObj.email;
        const adminPassword = adminObj.password;
        const status = await bcrypt.compare(password,adminPassword);
        if(status){
            const adminPayload = {
                email : request.body.email,
                role : "admin"
            }
            const expiryTime = {
                expiresIn : "1d"
            }
            const token = jwt.sign(adminPayload,ADMIN_SECRET,expiryTime);
            response.cookie('admin_jwt',token,{httpOnly:true,maxAge:720000*60*60});
            response.render("adminHome.ejs",{email:email,message:"",status:""});
            //response.redirect('/admin/adminHome');
        }else{
            response.render("adminLogin.ejs",{message:message.LOGIN_ERROR,status:status.ERROR});
        }
    }catch(error){
        console.log("Error : ",error);
        response.render("adminLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}

export const adminHomeController = async (request,response)=>{
    try{
        response.render("adminHome.ejs",{email:request.payload.email,message:"",status:""});
    }catch(error){
        console.log("Error in admin Home Controller : ",error);
        response.render("adminLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}

export const adminAddEventController = async (request,response)=>{
    try{
        response.render("adminAddEvent.ejs",{email:request.payload.email,message:"",status:""});
    }catch(error){
        console.log("Error in admin add event Controller : ",error);
        response.render("adminHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}

export const adminEventController = async (request,response)=>{
    try{
        console.log("----------------------?????????????---------");
        
        // console.log(request.body);
        
        request.body.eventId = uuid();
        // console.log('eventId : ',request.body.eventId);
        
        request.body.uploadDate = moment(new Date()).format('DD-MM-YYYY');
        // console.log('upload Date : ',request.body.uploadDate);
        
        request.body.uploadTime = moment(new Date()).format('hh:mm:ss A');
        // console.log('upload Time : ',request.body.uploadTime);
                
        const res = await eventSchema.create(request.body);
        // console.log(res);
        response.render("adminAddEvent.ejs",{email:request.payload.email,message:message.EVENT_ADDED,status:status.SUCCESS});        
    }catch(error){
        console.log("Error in admin event Controller : ",error);
        response.render("adminHome.ejs",{email:request.payload.email,message:message.EVENT_NOT_ADDED,status:status.ERROR});
    }
}

export const adminViewEventsController = async (request,response)=>{
    try{
        const eventData = await eventSchema.find({status:true});
        response.render("adminViewEvents.ejs",{eventData:eventData.reverse(),email:request.payload.email,message:"",status:status.SUCCESS});
    }catch(error){
        console.log("Error while admin view Events : ",error);
        response.render("adminHome.ejs",{email:request.payload.email,message:message.EVENT_LIST_ERROR,status:status.ERROR});
    }
}

export const adminDeleteEventController = async(request,response)=>{
    try{
            const eventId = request.body.eventId;
            const updateStatus = {
                $set : {
                    status : false
                }
            }
            const res = await eventSchema.updateOne({eventId},updateStatus);
            console.log("update res : ",res);
            const eventData = await eventSchema.find({status:true});
            response.render("adminViewEvents.ejs",{eventData:eventData.reverse(),email:request.payload.email,message:message.EVENT_DELETED,status:status.SUCCESS});
    }catch(error){
        console.log("Error while deleting event by admin : ",error);
        response.render("adminHome.ejs",{email:request.payload.email,message:message.EVENT_DELETE_ERROR,status:status.ERROR});
    }
}

export const adminUpdateEventController = async (request,response)=>{
    try{
        console.log("gets entry inside adminUpdate event controller");
        
        const eventId = request.body.eventId;
        const eventData = await eventSchema.findOne({eventId});
        console.log(eventData);
        
        response.render("adminUpdateEvent.ejs",{eventData,email:request.payload.email,message:"",status:status.SUCCESS});
    }catch(error){
        console.log("Error while admin Update Event Controller : ",error);
        const eventData = await eventSchema.find({status:true});
        response.render("adminViewEvents.ejs",{eventData:eventData.reverse(),email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});             
    }
}

export const adminEventUpdateController = async (request,response)=>{
    try{
            const status = {
                $set : request.body
            }
            const result = await eventSchema.updateOne({eventId:request.body.eventId},status);
            console.log("update result : ",result);
            const eventData = await eventSchema.find({status:true});
            response.render("adminViewEvents.ejs",{eventData:eventData.reverse(),email:request.payload.email,message:message.EVENT_UPDATED_SUCCESSFULLY,status:status.SUCCESS});    
            
    }catch(error){
        console.log("Error while admin  Event Update Controller : ",error);
        const eventData = await eventSchema.find({status:true});
        response.render("adminViewEvents.ejs",{eventData:eventData.reverse(),email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}

export const adminAlumniListController = async (request,response)=>{
    try{
        const alumniData = await alumniSchema.find();
        response.render("adminAlumniList.ejs",{alumniData,email:request.payload.email,message:"",status:status.SUCCESS});
    }catch(error){
        console.log("Error in adminAlumniListController : ",error);
        response.render("adminHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}

export const adminVerifyAlumniController = async (request,response)=>{
    try{
        const alumniId = request.body.alumniId;
        const status = {
            $set : {
                adminVerify : 'Verified'
            }
        }
        const result = await alumniSchema.updateOne({alumniId},status);
        console.log("Result : ",result);
        const alumniData = await alumniSchema.find();
        response.render("adminAlumniList.ejs",{alumniData,email:request.payload.email,message:message.ADMIN_VERIFIED_SUCCESSFULLY,status:status.SUCCESS});

    }catch(error){
        console.log("Error in adminVerifyAlumniController : ",error);
        const alumniData = await alumniSchema.find();
        response.render("adminAlumniList.ejs",{alumniData,email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}

export const adminViewJobsController = async (request,response)=>{
    try{
        const jobsData = await jobSchema.find();
        response.render("adminViewJobs.ejs",{jobsData:jobsData.reverse(),message:"",status:status.SUCCESS});
    }catch(error){
        console.log("Error : ",error);
        response.render("adminHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}

export const adminViewAllForumController = async (request,response)=>{
        try{
            const forumData = await forumSchema.find();
            response.render("adminViewForumList.ejs",{forumData:forumData.reverse(),email:request.payload.email,message:"",status:status.SUCCESS});
        }catch(error){
            console.log("Error in adminViewAllForumController : ",error);
            response.render("adminHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
        }
}

export const adminRemoveForumController = async (request,response)=>{
    try{
        const forumId = request.body.forumId;
        const res = await forumSchema.updateOne({forumId},{
            $set:{
                status:false
            }
        });
        const forumData = await forumSchema.find();
        response.render("adminViewForumList.ejs",{forumData:forumData.reverse(),email:request.payload.email,message:message.FORUM_REMOVED,status:status.SUCCESS});
    }catch(error){
        console.log("Error in adminRemoveForumController : ",error);
        response.render("adminHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});       
    }
}

export const adminViewAlumniStatusController = async (request,response)=>{
    try{
        const alumniConfirmationData = await eventConfirmationSchema.find();
        response.render("adminViewAlumniStatus.ejs",{alumniConfirmationData:alumniConfirmationData.reverse(),email:request.payload.email,message:"",status:status.SUCCESS});
    }catch(error){
        response.render("adminHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});            
    }
}

export const adminUploadImagesController = async(request,response)=>{
    try{
        const res = request.files;
        // console.log(res);
        var arrFileName = [];
        for(var i=0;i<res.images.length;i++){
            arrFileName.push(res.images[i].filename);
        }
        var obj = {
            galleryId : uuid4(),
            eventId : request.body.eventId,
            images : arrFileName
        }
        const result = await gallerySchema.create(obj);
        console.log("Result : ",result);    
        const eventData = await eventSchema.find({status:true});
        response.render("adminViewEvents.ejs",{eventData:eventData.reverse(),email:request.payload.email,message:message.IMAGES_UPLOADED,status:status.SUCCESS});
  
    }catch(error){
        console.log("Error in adminUploadImagesController : ",error);
        response.render("adminHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}


export const adminLogoutController = async (request,response)=>{
    try{
        response.clearCookie('admin_jwt');
        console.log("Logout Successfull");
        response.render("adminLogin.ejs",{message:message.LOGOUT_SUCCESSFULL,status:status.SUCCESS});
    }catch(error){
        console.log("Error in adminLogoutController : ",error);
        response.render("adminLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}