import express from 'express';
import { userRegistrationController,userLoginController,updateProfileController,userUpdateProfileController,addToDoController,userLogoutController } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.get('/',(request,response)=>{
    response.render("userHome.ejs",{userEmail:request.session.email,message:""});
});
userRouter.post('/register',userRegistrationController);
userRouter.post('/userLogin',userLoginController);
userRouter.get('/updateProfile',updateProfileController);
userRouter.post('/updateProfile',userUpdateProfileController);
userRouter.get('/addToDoForm',(request,response)=>{
    response.render("addToDoForm.ejs",{userEmail:request.session.email,message:""});
});
userRouter.post('/addToDo',addToDoController);
userRouter.get('/logout',userLogoutController);
export default userRouter;