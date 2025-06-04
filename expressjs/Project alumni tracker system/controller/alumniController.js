import uuid4 from "uuid4";
import mailer from "./mailer.js";
import { message, status } from "../utils/statusMessage.js";
import path from 'path';
import { fileURLToPath } from "url";
import alumniSchema from "../model/alumniSchema.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import moment from "moment";
import jobSchema from "../model/jobSchema.js";
import forumSchema from "../model/forumSchema.js";
import forumMemberSchema from "../model/forumMemberSchema.js";
import forumChatSchema from "../model/forumChatSchema.js";
import eventSchema from "../model/eventSchema.js";
import eventConfirmationSchema from "../model/eventConfirmationSchema.js";
import gallerySchema from "../model/gallerySchema.js";
dotenv.config();
const ALUMNI_SECRET_KEY = process.env.ALUMNI_SECRET_KEY;
export const alumniRegistrationController = async (request,response)=>{
    try{
        // console.log(request.files);
        // console.log(request.body);

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        
        request.body.alumniId = uuid4();
        const filename = request.files.profile;
        const fileName = new Date().getTime()+filename.name;
        request.body.profile = fileName;
        request.body.password = await bcrypt.hash(request.body.password,10);
        const pathName = path.join(__dirname.replace("\\controller","")+'/public/document/'+fileName);
        mailer.mailer(request.body.email,(value)=>{
            if(value){
                console.log("Mail sent successfully | Inside Alumni Controller");
                filename.mv(pathName,async(error)=>{
                    try{
                        const result = await alumniSchema.create(request.body);
                        console.log("alumni result : ",result);
                        response.render("alumniLogin.ejs",{message:message.WAIT_FOR_ADMIN_APPROVAL,status:status.SUCCESS});
                    }catch(error){
                        console.log("Error While Uploading Image : ",error);
                        response.render("alumniRegistration.ejs",{message:message.PROFILE_UPLOAD_ERROR,status:status.ERROR});
                    }
                })
            }else{
                console.log("Error while sending mail from mailer");
                response.render("alumniRegistration.ejs",{message:message.MAIL_SENDING_ERROR,status:status.ERROR});    
            }
        })
    }catch(error){
        console.log("Error : ",error);
        response.render("home.ejs");
    }
}

export const alumniEmailVerifyController = async (request,response)=>{
    try{
        const email = request.body.email;
        const status = {
            $set : {
                emailVerify : 'Verified'
            }
        }
        const result = await alumniSchema.updateOne({email},status);
        console.log("Email verify result : ",result);   
        response.render("alumniLogin.ejs",{message:message.EMAIL_VERIFICATION,status:status.SUCCESS});
    }catch(error){
        console.log("Error while alumni verify email : ",error);
        response.render("alumniLogin.ejs",{message:message.ERROR_VERIFYING_MAIL,status:status.ERROR}); 
    }
}

export const alumniLoginController = async (request,response)=>{
    try{
       
          const {email,password} = request.body;
                // console.log("Email : ",email);
                // console.log("Password : ",password);
                const alumniObj = await alumniSchema.findOne({email});
                // console.log("alumniObj : ",alumniObj);
                
                const alumniEmail = alumniObj.email;
                const alumniPassword = alumniObj.password;
                const status = await bcrypt.compare(password,alumniPassword);
                if(status && alumniObj.status){
                    const alumniPayload = {
                        email : request.body.email,
                        username : request.body.username,
                        role : "alumni"
                    }
                    const expiryTime = {
                        expiresIn : "365d"
                    }
                    const token = jwt.sign(alumniPayload,ALUMNI_SECRET_KEY,expiryTime);
                    response.cookie('alumni_jwt',token,{httpOnly:true,maxAge:720000*60*60});
                    response.render("alumniHome.ejs",{email:email,message:"",status:""});
                   // response.redirect('/alumni/alumniHome');
                }else{
                    response.render("alumniLogin.ejs",{message:message.LOGIN_ERROR,status:status.ERROR});
                }
    }catch(error){
        console.log("Error in alumniLoginController : ",error);
        response.render("alumniLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});       
    }
}

export const alumniHomeController = async (request,response)=>{
    try{
        response.render("alumniHome.ejs",{email:request.payload.email,message:"",status:""});
    }catch(error){
        console.log("Error in alumni Home Controller : ",error);
        response.render("alumniLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}

export const alumniJobFormController = async(request,response)=>{
    try{
        response.render("alumniJobForm.ejs",{email:request.payload.email,message:"",status:""});
    }catch(error){
        console.log("Error while dealing with alumniJobFormController : ",error);
        response.render("alumniHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});        
    }
}

export const alumniJobPostingController = async (request,response)=>{
    try{
        request.body.jobId = uuid4();
        const alumniObj = await alumniSchema.findOne({email:request.payload.email},{alumniId:1});
        request.body.alumniId = alumniObj.alumniId;
        console.log("alumni Id : ",request.body.alumniId);
        const result = await jobSchema.create(request.body);
        console.log("Result : ",result);
        console.log("Job Posting successfully");
        response.render("alumniJobForm.ejs",{email:request.payload.email,message:message.JOB_SUCCESS_STATUS,status:status.SUCCESS});
    }catch(error){
        console.log("Error while alumniJobPostingController : ",error);
        response.render("alumniHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});        
    }
} 

export const alumniAddForumTopicController = async (request,response)=>{
    try{
        response.render("alumniAddForum.ejs",{message:"",status:status.SUCCESS});
    }catch(error){
        console.log("Error in alumniAddForumTopicController : ",error);
        response.render("alumniHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});                
    }
}

export const alumniAddForumController = async (request,response)=>{
    try{    
        request.body.forumId = uuid4();
        const alumniObj = await alumniSchema.findOne({email:request.payload.email},{alumniId:1});
        request.body.alumniId = alumniObj.alumniId;

        const result = await forumSchema.create(request.body);
        response.render("alumniAddForum.ejs",{message:message.FORUM_ADDED,status:status.SUCCESS});
    }catch(error){
        console.log("Error in alumniAddForumController : ",error);        
        response.render("alumniHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}

export const alumniForumListController = async (request,response)=>{
    try{
        const alumniObj = await alumniSchema.findOne({email:request.payload.email},{alumniId:1});
        const alumniId = alumniObj.alumniId;

        const forumData = await forumSchema.find({alumniId,status:true});
        response.render("alumniViewForumList.ejs",{forumData:forumData.reverse(),email:request.payload.email,message:"",status:status.SUCCESS});
    }catch(error){
        console.log("Error in alumniForumListController : ",error);
        response.render("alumniHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}

export const alumniAllForumListController = async (request,response)=>{
    try{
        const forumData = await forumSchema.find({status:true});
        console.log("forum Data : ",forumData);
        const alumniObj = await alumniSchema.findOne({email:request.payload.email},{alumniId:1});
        const alumniId = alumniObj.alumniId;
        // console.log("alumniId : ",alumniId);
        const forumMemberArray = await forumMemberSchema.find();
        console.log("forumMemberArray : ",forumMemberArray);
        
        for(var i=0;i<forumData.length;i++){
            console.log((i+1)+" forum data : ",forumData[i]);
                
            for(var j=0;j<forumMemberArray.length;j++){
                console.log((j+1)+" forum member data : ",forumMemberArray[i]);
                
                if(forumMemberArray[j].forumId==forumData[i].forumId && forumMemberArray[j].alumniId==alumniId){
                    console.log("--------forumId : ",(forumMemberArray[j].forumId==forumData[i].forumId));
                    console.log("--------alumniId : ",(forumMemberArray[j].alumniId==forumData[i].alumniId));
                    forumData[i].messageStatus = 'Send Message';
                }
            }
            console.log((i+1)+" forum data : ",forumData[i]);
            
        }

        response.render("alumniViewAllForumList.ejs",{forumData:forumData.reverse(),email:request.payload.email,message:"",status:status.SUCCESS});
    }catch(error){
        console.log("Error in alumniForumListController : ",error);
        response.render("alumniHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}

export const alumniJoinForumController = async (request,response)=>{
 try{
    const details = request.body.forumDetails;
    // console.log(details);
    const forumDetails = JSON.parse(details);
    const chatData = await forumChatSchema.find({forumId : forumDetails.forumId});
    for(var i=0;i<chatData.length;i++){
       const alumniObj = await alumniSchema.findOne({alumniId:chatData[i].alumniId},{username:1}); 
       chatData[i].alumniName = alumniObj.username; 
    }

    const forumId = forumDetails.forumId;
    const alumniObj = await alumniSchema.findOne({email:request.payload.email},{alumniId:1});
    const alumniId = alumniObj.alumniId;

    const checkForumMember = await forumMemberSchema.find({forumId,alumniId});
    console.log("checkForumMember : ",checkForumMember.length);
    
    const specificForumIdArray = await forumMemberSchema.find({forumId});
    const totalForumMember = specificForumIdArray.length; 

    if(checkForumMember.length==0){
        const res = await forumMemberSchema.create({forumMemberId:uuid4(),forumId,alumniId});
        if(res){
           // response.render("forumChat.ejs",{forumDetails,totalForumMember,email:request.payload.email,message:"",status:status.SUCCESS});
        
           response.render("forumChat.ejs",{chatData,myId : alumniId,forumDetails,totalForumMember,email:request.payload.email,message:"",status:status.SUCCESS});

        }else{
            const forumData = await forumSchema.find({status:true});
            response.render("alumniViewAllForumList.ejs",{forumData:forumData.reverse(),email:request.payload.email,message:message.ERROR_FORUM_MEMBER,status:status.SUCCESS});
        }
    }else{
       // response.render("forumChat.ejs",{forumDetails,totalForumMember,email:request.payload.email,message:"",status:status.SUCCESS});
    
       response.render("forumChat.ejs",{chatData,myId : alumniId,forumDetails,totalForumMember,email:request.payload.email,message:"",status:status.SUCCESS});

    }    
    
 }catch(error){
    console.log("Error in alumniJoinForumController : ",error);
    response.render("alumniHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
 }   
}

export const alumniForumChatController = async(request,response)=>{
    try{
        const forumDetails = JSON.parse(request.body.forumDetails);
        const alumniObj = await alumniSchema.findOne({email:request.payload.email},{alumniId:1}); 
        // console.log("forumDetails : ",forumDetails);
        const obj = {
            forumChatId : uuid4(),
            forumId : forumDetails.forumId,
            alumniId : alumniObj.alumniId,
            message : request.body.message
        }
        const result = await forumChatSchema.create(obj);
        console.log("result of alumniForumChatController : ",result);

        const chatData = await forumChatSchema.find({forumId : forumDetails.forumId});
        for(var i=0;i<chatData.length;i++){
            const alumniObj = await alumniSchema.findOne({alumniId:chatData[i].alumniId},{username:1}); 
            chatData[i].alumniName = alumniObj.username; 
         }
         
        const specificForumIdArray = await forumMemberSchema.find({forumId:forumDetails.forumId});
        const totalForumMember = specificForumIdArray.length; 

        response.render("forumChat.ejs",{chatData,myId : alumniObj.alumniId,forumDetails,totalForumMember,email:request.payload.email,message:"",status:status.SUCCESS});
     
    }catch(error){
        console.log("Error in alumniForumChatController : ",error);
        response.render("alumniHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});        
    }
}

export const alumniViewEventsController = async (request,response)=>{
     try{
            const eventData = await eventSchema.find({status:true});
            const eventInvitationData = await eventConfirmationSchema.find();
            const alumniObj = await alumniSchema.findOne({email:request.payload.email},{alumniId:1});
            const alumniId = alumniObj.alumniId;

            if(eventInvitationData.length!=0){
                for(var i=0;i<eventData.length;i++){
                    for(var j=0;j<eventInvitationData.length;j++){
                        if(eventInvitationData[j].eventId == eventData[i].eventId && eventInvitationData[j].alumniId == alumniId)
                            eventData[i].inviteBTNMessage = 'Invitation Accepted'
                    }
                }    
            }
            response.render("alumniViewEvents.ejs",{eventData:eventData.reverse(),email:request.payload.email,message:"",status:status.SUCCESS});
        }catch(error){
            console.log("Error while alumni view Events : ",error);
            response.render("alumniHome.ejs",{email:request.payload.email,message:message.EVENT_LIST_ERROR,status:status.ERROR});
        }
}

export const alumniAcceptInvitationController = async (request,response)=>{
    try{
        const alumniObj = await alumniSchema.findOne({email:request.payload.email},{alumniId:1,username:1});
        const alumniId = alumniObj.alumniId;
        const obj = {
            eventConfirmationId : uuid4(),
            eventId : request.body.eventId,
            eventName : request.body.eventName,
            alumniId : alumniObj.alumniId,
            alumniName : alumniObj.username
        }
        const result = await eventConfirmationSchema.create(obj);
        console.log("Result : ",result);
        const eventData = await eventSchema.find({status:true});
        const eventInvitationData = await eventConfirmationSchema.find();
           
        if(eventInvitationData.length!=0){
                for(var i=0;i<eventData.length;i++){
                    for(var j=0;j<eventInvitationData.length;j++){
                        if(eventInvitationData[j].eventId == eventData[i].eventId && eventInvitationData[j].alumniId == alumniId)
                            eventData[i].inviteBTNMessage = 'Invitation Accepted'
                    }
                }    
            }

        response.render("alumniViewEvents.ejs",{eventData:eventData.reverse(),email:request.payload.email,message:message.INVITATION_ACCEPTED,status:status.SUCCESS});
        
    }catch(error){
        console.log("Error in alumniAcceptInvitationController : ",error);
        response.render("alumniHome.ejs",{email:request.payload.email,message:message.EVENT_ACCEPTANCE_ERROR,status:status.ERROR});
    }
}

export const alumniViewGalleryController = async (request,response)=>{
    try{
        const galleryData = await gallerySchema.find({status:true});
        // console.log(galleryData);
        for(var i=0;i<galleryData.length;i++){
            const eventId = galleryData[i].eventId;
            const eventObj = await eventSchema.findOne({eventId},{eventName:1});
            galleryData[i].eventName = eventObj.eventName;
        }
        response.render("alumniViewGallery.ejs",{galleryData:galleryData.reverse(),message:"",status:""});
    }catch(error){
        console.log("Error in alumniViewGalleryController : ",error);
        response.render("alumniHome.ejs",{email:request.payload.email,message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}

export const alumniLogoutController = async (request,response)=>{
    try{
        response.clearCookie('alumni_jwt');
        console.log("Logout Successfull");
        response.render("alumniLogin.ejs",{message:message.LOGOUT_SUCCESSFULL,status:status.SUCCESS});
    }catch(error){
        console.log("Error in alumniLogoutController : ",error);
        response.render("alumniLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}