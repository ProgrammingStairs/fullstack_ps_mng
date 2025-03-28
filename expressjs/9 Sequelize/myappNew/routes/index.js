import express from 'express';
import { addStudent,viewStudents,searchStudent } from '../controller/studentController.js';
var indexRouter = express.Router();

// router level middleware
indexRouter.use((request,response,next)=>{
    console.log("index router executes");
    next();
});

indexRouter.get('/',(request,response)=>{
    response.render("index.ejs");
});

indexRouter.get('/addStudent',(request,response)=>{
    response.render("addStudent.ejs",{message:""});
});
indexRouter.post('/addStudent',addStudent);
indexRouter.get('/viewStudents',viewStudents);
indexRouter.get('/searchForm',(request,response)=>{
    response.render("searchForm.ejs",{studentData:[],status:false});
});
indexRouter.post('/searchStudent',searchStudent);

export default indexRouter;