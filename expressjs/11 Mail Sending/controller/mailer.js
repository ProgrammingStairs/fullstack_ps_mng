import nodemailer from 'nodemailer';

const mailer = function(email,callback){
    const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'jsexample63@gmail.com',
            pass:''     
        }
    });
    
    const mailOption = {
        from : 'jsexample63@gmail.com',
        to:email,
        subject : 'Verification Mail',
        html:`Hello ${email},This is a verification mail. You needs to verify yourself by clicking on the link given below.<br><a href="http://localhost:3000/index/verifyEmail?email=${email}">Click To Verify</a>`
    }

    transport.sendMail(mailOption,(error,info)=>{
        if(error){
            console.log("Error occured in mailer : ",error);
            callback(false);
        }else{
            console.log("Mail sent from mailer");
            callback(info);
        }
    });
}

export default {mailer:mailer};





