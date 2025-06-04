import indexSchema from "../model/indexSchema.js";
import mailer from "./mailer.js";
export const addEmployeeController = async(request,response)=>{
    try{
        mailer.mailer(request.body.email,async(result)=>{
            if(result){
                console.log('Mail sent successfully');
                const res = await indexSchema.create(request.body);
                response.render("login.ejs",{message:"Mail Sent | Please Verify"});                
            }else{
                console.log('Error while sending mail ');
                response.render("register.ejs",{message:"Error while sending mail"});
            }
        })
    }catch(error){
        console.log("Error in add controller : ",error);
        response.render("register.ejs");
    }
}

export const verifyEmailController = async (request,response)=>{
    try{
        const email = request.query.email;
        const result = await indexSchema.updateOne({email},{$set:{emailVerify:'Verified'}});
        console.log("-----------> ",result);
        response.render("login.ejs",{message:"Email Verified || Now You can Login",status:200});
    }catch(error){
        console.log("Error in verify email controller : ",error);   
        response.render("login.ejs",{message:"Error while verifying Email",status:500});
    }
}

export const loginController = async (request,response)=>{
    try{
        const {email,password} = request.body;
        const status = {
            $and : [
                {
                    email,
                    password,
                    emailVerify:'Verified'
                }
            ]
        }
        const result = await indexSchema.findOne(status);
        console.log(result);
        if(result){
            request.session.email = email;
            request.session.save();
            response.render("profile.ejs",{email:request.session.email,message:"",status:""});        
        }else{
            response.render("login.ejs",{message:"Email Id or password is wrong or Email Not verified",status:500});     
        }
    }catch(error){
        console.log("Error in login controller : ",error);
        response.render("login.ejs",{message:"Error while performing login operation",status:500});
    }
}