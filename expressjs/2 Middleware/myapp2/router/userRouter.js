import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';
var userRouter = express.Router();

var __filename = fileURLToPath(import.meta.url);
var __dirname = path.dirname(__filename).replace("\\router","");

userRouter.get('/',(request,response)=>{
    response.sendFile(__dirname+"/user.html");
});
userRouter.get('/profile',(request,response)=>{
    response.sendFile(__dirname+"/userProfile.html");
});
userRouter.get('/viewProduct',(request,response)=>{
    response.sendFile(__dirname+"/userViewProduct.html");
});

export default userRouter;