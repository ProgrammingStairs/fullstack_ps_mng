import express from 'express';
var app = express();

app.use(express.static('public'));
app.set("views","views");
app.set("view engine","ejs");

app.get("/",(request,response)=>{
    response.render("index.ejs");    
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});