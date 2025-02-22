import express from 'express';
var app = express();

app.set("views","views");
app.set("view engine","ejs");

const bookDetails = [{
    bookName:"Programming with C",
    authorName : "Dennis Ritchie",
    price:1200
},{
    bookName:"Programming with C++",
    authorName : "Bjarne Stroustrup",
    price:1400
},{
    bookName:"Programming with Java",
    authorName : "James Gosling",
    price:1600
}];

app.get('/',(request,response)=>{
    response.render("index2.ejs",{bookDetails});
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});
