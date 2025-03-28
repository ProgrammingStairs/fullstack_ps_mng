import student from "../model/studentModel.js";
import { message } from "../utils/status_message.js";

export const addStudent = async (request,response)=>{
    try{
        const result = await student.create(request.body);
        //  console.log("Result : ",result.dataValues);
        if(result.dataValues){
            response.render("addStudent.ejs",{message:message.STUDENT_ADDED});
        }else{
            response.render("addStudent.ejs",{message:message.STUDENT_NOT_ADDED});
        }
    }catch(error){
        console.log("Error : ",error);
    }
}
export const viewStudents = async (request,response)=>{
    try{
        const result = await student.findAll();
        // console.log("Result : ",result);
        response.render("viewStudents.ejs",{studentData:result});
    }catch(error){
        console.log("Error : ",error);
    }
}
export const searchStudent = async (request,response)=>{
    try{
        const result = await student.findOne({
            where:{
                email:request.body.email
            }
        });
        console.log("Result : ",result);
        response.render("searchForm.ejs",{studentData: result ? result.dataValues : [],status:true});
    }catch(error){
        console.log("Error : ",error);
    }
}
