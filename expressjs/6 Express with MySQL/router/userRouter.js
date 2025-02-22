import express from 'express';
var userRouter = express.Router();

userRouter.post('/register',(request,response)=>{
    console.log(request.body);
});

export default userRouter;