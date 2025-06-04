import express from 'express';
import dotenv from 'dotenv';
import adminRouter from './router/adminRouter.js';
import alumniRouter from './router/alumniRouter.js';
import { initializeAdminData } from './utils/adminUtil.js';
import { url } from './connection/dbConfig.js';
import mongoose from 'mongoose';
// import expressFileUpload from 'express-fileupload';
import { message, status } from './utils/statusMessage.js';
import cookieParser from 'cookie-parser';
mongoose.connect(url);
dotenv.config();

var app = express();
// const res = await initializeAdminData();
// if(!res){
//     response.render("adminLogin.ejs",{message:message.ADMIN_CREDENTIAL_ERROR,status:status.ERROR});
// }

app.set("views", "views");
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
// app.use(expressFileUpload());

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    next();
});


app.get("/", (request, response) => {
    response.render("home.ejs");
});
app.get('/adminLogin',async (request, response) => {
    const res = await initializeAdminData();
    if(!res){
        response.render("adminLogin.ejs",{message:message.ADMIN_CREDENTIAL_ERROR,status:status.ERROR});
    }else
      response.render("adminLogin.ejs", { message: "", status: "" });
});
app.use('/admin', adminRouter);
app.use('/alumni', alumniRouter);
app.listen(process.env.PORT, () => {
    console.log("Connection established successfully");
});