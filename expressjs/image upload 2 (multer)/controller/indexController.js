import path from 'path';
import {fileURLToPath} from 'url';
import indexSchema from '../model/indexSchema.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addEmployeeController = async (request,response)=>{
    try{
        const res = request.files;
        // console.log(res);
        request.body.profileOne = request.files['profileOne'][0].filename;
        request.body.profileTwo = request.files['profileTwo'][0].filename;
        const result = await indexSchema.create(request.body);
        // console.log("result : ",result);
        const employeeData = await indexSchema.find();
        // console.log("employeeData : ",employeeData);
        response.render('viewEmployee.ejs',{employeeData,message:"File Uploaded successfully"});
    }catch(error){
        console.log("Error in add Employee: ",error);
        response.render("register.ejs",{message:"Something Went Wrong"});
    }
}

export const viewEmployeeController = async (request,response)=>{
    try{
        const employeeData = await indexSchema.find();
        response.render("viewEmployee.ejs",{employeeData:employeeData.reverse(),message:""});
    }catch(error){
        console.log("Error : ",error);
        response.render("viewEmployee.ejs",{employeeData:[],message:"Something Went Wrong"});     
    }
}

