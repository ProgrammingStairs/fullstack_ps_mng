import path from 'path';
import {fileURLToPath} from 'url';
import indexSchema from '../model/indexSchema.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// export const addEmployeeController = async (request,response)=>{
//     try{
//         // console.log(request.body);
//         const filename = request.files.profile;
//         const fileName = new Date().getTime()+filename.name;
//         // console.log("filename object: ",filename);
//         // console.log("dirname : ",__dirname);
//         const pathName = path.join(__dirname,'/public/images/',fileName).replace("\\controller",'');
//         // console.log(pathName);
//         filename.mv(pathName,async(error)=>{
//             if(error)
//                 console.log("Error : ",error);
//             else{
//                 request.body.profile = fileName;
//                 const res = await indexSchema.create(request.body);
//                 console.log("res : ",res);
//                 response.render("register.ejs",{message:"File Uploaded Successfully"});
//             }
//         });    
//     }catch(error){
//         console.log("Error in add Employee: ",error);
//         response.render("register.ejs",{message:"Something Went Wrong"});
//     }
// }

export const addEmployeeController = async (request,response)=>{
    try{
        // console.log(request.body);
        const filename = request.files.profile;
        const fileName = new Date().getTime()+filename.name;
        // console.log("filename object: ",filename);
        // console.log("dirname : ",__dirname);
        const pathName = path.join(__dirname,'/public/images/',fileName).replace("\\controller",'');
        // console.log(pathName);
        filename.mv(pathName,async(error)=>{
            if(error)
                console.log("Error : ",error);
            else{
                request.body.profile = fileName;
                const res = await indexSchema.create(request.body);
                const employeeData = await indexSchema.find();
        response.render("viewEmployee.ejs",{employeeData:employeeData.reverse(),message:"File Uploaded Successfully"});
            }
        });    
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

