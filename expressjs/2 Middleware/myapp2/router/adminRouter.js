import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
var adminRouter = express.Router();

var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename).replace("\\router","");

adminRouter.get('/',(request,response)=>{
    response.sendFile(__dirname+"/admin.html");
});
adminRouter.get('/profile',(request,response)=>{
    response.sendFile(__dirname+"/adminProfile.html");
});
adminRouter.get('/viewUsers',(request,response)=>{
    response.sendFile(__dirname+"/adminViewUsers.html");
});

export default adminRouter;
