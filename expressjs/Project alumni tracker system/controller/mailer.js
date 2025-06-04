import nodemailer from 'nodemailer';
const mailer = function(email,callback){
    const transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'kotharigaurav6@gmail.com',
            pass:''
        }
    });

    const mailOption = {
        from : 'kotharigaurav6@gmail.com',
        to : email,
        subject: 'Hello Alumni, Its a Verification Mail',
        html : `Hello ${email},This is Verification mail of Alumni Tracker System. Please Click on the below link to verify Yourself.<br> 
        <form action='http://localhost:3000/alumni/alumniEmailVerify' method='post'>
            <input type='hidden' name='email' id='email' value='${email}'>
            <button>Click Here to Verify</button>
        </form>`
    }

    transport.sendMail(mailOption,(error,info)=>{
        if(error){
            console.log("Error while sending mail from mailer : ",error);
            callback(false);
        }else{
            console.log("Mail from mailer send successfully ");
            callback(info);
        }
    });
}

export default {mailer:mailer};