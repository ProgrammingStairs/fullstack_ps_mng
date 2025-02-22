import express from 'express';
import expressSession from 'express-session';
import dotenv from 'dotenv';
import { message, status } from './utils/statusMessage.js';
dotenv.config();
var app = express();

app.set("views","views");
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(expressSession({secret:process.env.SECRET,resave:true,saveUninitialized:true}));

app.get('/',(request,response)=>{
    response.render("index.ejs",{email:"",message:"",status:""});
});
app.get('/login',(request,response)=>{
    response.render("login.ejs",{message:"",status:""});
});
app.post('/checkCredential',(request,response)=>{
    const {email,password} = request.body;
    // console.log("before : ",request.session);
    
    if(email=="andrew@gmail.com" && password=="andrew@123"){
        request.session.email = email;
        request.session.save();
        // console.log("after : ",request.session);
        response.render('index.ejs',{email,message:message.LOGIN_SUCCESS,status:status.SUCCESS});
    }else{
        response.render('login.ejs',{message:message.LOGIN_UNSUCCESS,status:""});
    }
});

app.get('/logout',(request,response)=>{
    request.session.email='';
    request.session.destroy((error)=>{
        if(error)
            console.log("Error while logout : ",error);
        else{
            console.log("Logout successfully");
            response.render('login.ejs',{message:message.LOGOUT_SUCCESS,status:status.SUCCESS});            
        }
    });
});
app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});