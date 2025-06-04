import express from 'express';
import { addEmployeeController,viewEmployeeController } from '../controller/indexController.js';
import multer from 'multer';
var indexRouter = express.Router();

const storage = multer.diskStorage({
    destination:'./public/images',
    filename: (request,fileObj,callback)=>{
        callback(null,new Date().getTime()+fileObj.originalname);
    }
});

const uploads = multer({storage:storage});

indexRouter.get('/addEmployee',(request,response)=>{
    response.render('register.ejs',{message:""});
});
indexRouter.post('/addEmployee',uploads.fields([{name:'profileOne',maxCount:100},{name:'profileTwo',maxCount:100}]),addEmployeeController);
indexRouter.get('/viewEmployee',viewEmployeeController);

export default indexRouter;