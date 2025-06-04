import path from 'path';
import {fileURLToPath} from 'url';
import indexSchema from '../model/indexSchema.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addEmployeeController = async (request,response)=>{
    try{
        const res = request.files;
        // console.log(res);
        
        var arr1 = [];
        var arr2 = [];
        for(let i=0;i<request.files['profileOne'].length;i++){
            arr1.push(request.files['profileOne'][i].filename);
        }
        for(let i=0;i<request.files['profileTwo'].length;i++){
            arr2.push(request.files['profileTwo'][i].filename);
        }
        request.body.profileOne = arr1;
        request.body.profileTwo = arr2;
        
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

