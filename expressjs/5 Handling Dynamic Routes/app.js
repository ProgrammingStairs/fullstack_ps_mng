import express from 'express';
var app = express();

// handle single route
app.get('/example',(request,response)=>{
    const email = request.query.email;
    response.send(`<h2>Hello ${email}</h2>`);
});

app.get('/example/:email',(request,response)=>{
    const email = request.params.email;
    response.send(`<h2>Hello ${email} again</h2>`);
});

// handle multiple routes
app.get('/example/:username/:email',(request,response)=>{
    const username = request.params.username;
    const email = request.params.email;
    response.send(`<h2>Hello ${username} , your email id is ${email}</h2>`);
});

// handle optional route
app.get('/exampleOptional/:username?',(request,response)=>{
    const username = (request.params.username) ? request.params.username : "John Deo";
    response.send(`<h2>Hello ... ${username}</h2>`);
});

// handle route with regex
app.get('/exampleNumber/:number',(request,response)=>{
    const number = request.params.number;
    const regExp = /^[6789][0-9]{9}$/;
    response.send(`<h2>Mobile Number Status : ${regExp.test(number)}</h2>`);
});

// wild card route
app.get('/exampleAgain/*',(request,response)=>{
    const value = request.params[0];    
    response.send(`<h2>${value}</h2>`);
});

app.listen(3000,(request,response)=>{
    console.log("Server connection successfull");
});