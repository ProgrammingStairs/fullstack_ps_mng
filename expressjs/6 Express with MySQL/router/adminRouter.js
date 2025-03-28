import express from 'express';
import { adminLoginController,adminViewUserController,adminVerifyUserController,adminBlockUserController } from '../controller/adminController.js';
var adminRouter = express.Router();

adminRouter.get('/',(request,response)=>{
    response.render("adminProfile.ejs",{adminEmail:request.session.email});
});

adminRouter.post('/adminLogin',adminLoginController);
adminRouter.get('/viewUsers',adminViewUserController);
adminRouter.get('/adminVerifyUser',adminVerifyUserController);
adminRouter.get('/adminBlockUser',adminBlockUserController);

export default adminRouter;