import express from 'express';
import { adminHomeController, adminLoginController,adminAddEventController,adminEventController,adminViewEventsController,adminDeleteEventController,adminUpdateEventController,adminEventUpdateController,adminAlumniListController,adminVerifyAlumniController,adminViewJobsController,adminViewAllForumController,adminRemoveForumController,adminViewAlumniStatusController,adminUploadImagesController,adminLogoutController } from '../controller/adminController.js';
import { message, status } from '../utils/statusMessage.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import multer from 'multer';
dotenv.config();
const ADMIN_SECRET = process.env.ADMIN_SECRET_KEY;
var adminRouter = express.Router();
const authenticateJWT = (request,response,next)=>{
    try{
        const token = request.cookies.admin_jwt;
        console.log("Token : ",token);
        
        if(!token){
            console.log("Error while fetching token");
            response.render("adminLogin.ejs",{message:message.LOGIN_ISSUE,status:status.ERROR});
        }
        else{
            jwt.verify(token,ADMIN_SECRET,(error,payload)=>{
                if(error){
                    console.log("Error while verifying token : ",error);
                    response.render("adminLogin.ejs",{message:message.LOGIN_ISSUE,status:status.ERROR});
                }else{
                    request.payload = payload;
                    next();
                }
            });
        }     
    }catch(error){
        console.log("Error while admin authenticate JWT : ",error);
        response.render("adminLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}
const authorizeJWT = (request,response,next)=>{
    try{
        if(request.payload.role=="admin"){
            next();
        }
    }catch(error){
        console.log("Error while Authorize admin JWT : ",error);
        response.render("adminLogin.ejs",{message:message.SOMETHING_WENT_WRONG,status:status.ERROR});
    }
}

adminRouter.post('/adminLogin',adminLoginController);
adminRouter.get('/adminHome',authenticateJWT,authorizeJWT,adminHomeController);
adminRouter.get('/adminAddEvent',authenticateJWT,adminAddEventController);
adminRouter.post('/adminAddEvent',authenticateJWT,adminEventController);
adminRouter.get('/adminViewEvents',authenticateJWT,adminViewEventsController);
adminRouter.post('/adminDeleteEvent',authenticateJWT,adminDeleteEventController);
adminRouter.post('/adminUpdateEvent',authenticateJWT,adminUpdateEventController);
adminRouter.post('/adminEventUpdate',authenticateJWT,adminEventUpdateController);
adminRouter.get('/adminAlumniList',authenticateJWT,adminAlumniListController);
adminRouter.post('/adminVerifyAlumni',authenticateJWT,adminVerifyAlumniController);
adminRouter.get('/adminViewJobs',authenticateJWT,adminViewJobsController);
adminRouter.get('/adminViewAllForum',authenticateJWT,adminViewAllForumController);
adminRouter.post('/adminRemoveForum',authenticateJWT,adminRemoveForumController);
adminRouter.get('/adminViewAlumniStatus',authenticateJWT,adminViewAlumniStatusController);

const storage = multer.diskStorage({
    destination:'./public/images', 
    filename : (request,fileObj,callback)=>{
        callback(null,new Date().getTime()+fileObj.originalname)
    }
});
const uploads = multer({storage : storage});

adminRouter.post('/adminUploadImages',authenticateJWT,uploads.fields([{name:'images',maxCount:100}]),adminUploadImagesController);
adminRouter.get("/adminLogout",authenticateJWT,adminLogoutController);
export default adminRouter;