import express from 'express';
import { addEmployeeController,verifyEmailController,loginController } from '../controller/indexController.js';
var indexRouter = express.Router();

indexRouter.get('/register',(request,response)=>{
    response.render('register.ejs',{message:""});
});
indexRouter.get('/login',(request,response)=>{
    response.render('login.ejs',{message:""});
});
indexRouter.post('/addEmployee',addEmployeeController);
indexRouter.get('/verifyEmail',verifyEmailController);
indexRouter.post('/login',loginController);
export default indexRouter;