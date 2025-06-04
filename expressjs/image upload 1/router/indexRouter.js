import express from 'express';
import { addEmployeeController,viewEmployeeController } from '../controller/indexController.js';
var indexRouter = express.Router();

indexRouter.get('/addEmployee',(request,response)=>{
    response.render('register.ejs',{message:""});
});
indexRouter.post('/addEmployee',addEmployeeController);
indexRouter.get('/viewEmployee',viewEmployeeController);

export default indexRouter;