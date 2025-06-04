import express, { response } from 'express';
import { alumniRegistrationController,alumniEmailVerifyController, alumniLoginController,alumniHomeController,alumniJobFormController,alumniJobPostingController,alumniAddForumTopicController,alumniAddForumController,alumniForumListController,alumniAllForumListController,alumniJoinForumController,alumniForumChatController,alumniViewEventsController,alumniAcceptInvitationController,alumniViewGalleryController,alumniLogoutController } from '../controller/alumniController.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import expressFileUpload from 'express-fileupload';
import { message, status } from '../utils/statusMessage.js';
dotenv.config();
const ALUMNI_SECRET = process.env.ALUMNI_SECRET_KEY;
const alumniRouter = express.Router();
alumniRouter.use(expressFileUpload());
const authenticateJWT = (request,response,next)=>{
    try{
        const token = request.cookies.alumni_jwt;
        console.log("Token : ",token);
        
        if(!token){
            console.log("Error while fetching token inside alumni");
            response.render("alumniLogin.ejs",{message:message.LOGIN_ISSUE,status:status.ERROR});    
        }
        else{
            jwt.verify(token,ALUMNI_SECRET,(error,payload)=>{
                if(error){
                    console.log("Error while verifying token : ",error);
                    response.render("alumniLogin.ejs",{message:message.LOGIN_ISSUE,status:status.ERROR});
                }else{
                    request.payload = payload;
                    next();
                }
            });
        }     
    }catch(error){
        console.log("Error while alumni authenticate JWT : ",error);
        response.render("alumniLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}
const authorizeJWT = (request,response,next)=>{
    try{
        if(request.payload.role=="alumni"){
            next();
        }
    }catch(error){
        console.log("Error while Authorize alumni JWT : ",error);
        response.render("alumniLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}


alumniRouter.get('/alumniLogin',(request,response)=>{
    response.render("alumniLogin.ejs",{message:"",status:""});
});

alumniRouter.get('/alumniRegistration',(request,response)=>{
    response.render("alumniRegistration.ejs",{message:"",status:""});
});

alumniRouter.post('/alumniRegistration',alumniRegistrationController);
alumniRouter.post('/alumniEmailVerify',alumniEmailVerifyController);
alumniRouter.post('/alumniLogin',alumniLoginController);
alumniRouter.get('/alumniHome',authenticateJWT,authorizeJWT,alumniHomeController);
alumniRouter.get('/alumniJobForm',authenticateJWT,alumniJobFormController);
alumniRouter.post('/alumniJobPosting',authenticateJWT,alumniJobPostingController);
alumniRouter.get('/alumniAddForumTopic',authenticateJWT,alumniAddForumTopicController);
alumniRouter.post('/alumniAddForumTopic',authenticateJWT,alumniAddForumController);
alumniRouter.get('/alumniForumList',authenticateJWT,alumniForumListController);
alumniRouter.get('/alumniAllForumList',authenticateJWT,alumniAllForumListController);
alumniRouter.post('/alumniJoinForum',authenticateJWT,alumniJoinForumController);
alumniRouter.post('/alumniForumChat',authenticateJWT,alumniForumChatController);
alumniRouter.get('/alumniViewEvents',authenticateJWT,alumniViewEventsController);
alumniRouter.post('/alumniAcceptInvitation',authenticateJWT,alumniAcceptInvitationController);
alumniRouter.get('/alumniViewGallery',authenticateJWT,alumniViewGalleryController);
alumniRouter.get('/alumniLogout',authenticateJWT,alumniLogoutController);

export default alumniRouter;