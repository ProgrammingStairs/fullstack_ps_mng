import express from 'express';
import validation from 'express-validator';
const {check,validationResult} = validation;
var app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("views","views");
app.set("view engine","ejs");

app.get('/',(request,response)=>{
    response.render("index.ejs");
});
app.get('/register',(request,response)=>{
    response.render("register.ejs");
});
app.post('/viewInfo',[
    check("username","Enter Username").not().isEmpty(),
    check("email","Enter Email").not().isEmpty(),
    check("password","Enter Password").not().isEmpty().isLength({max:10,min:5}),
    check("contact","Enter Contact").custom((value)=>{
        var regex=/^[6789][0-9]{9}$/;
        if(regex.test(value)){
            console.log("gets entry");
            return true;
        }else
            return false;
    })
],(request,response)=>{
    var error = validationResult(request);
    if(!error.isEmpty()){
        console.log("Error : ",error);
        response.send("Error occured");
    }else{
        response.send("success");
    }
});

app.listen(3000,()=>{
    console.log("Server connection successfull");
});