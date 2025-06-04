import adminSchema from "../model/adminSchema.js";
import bcrypt from 'bcrypt';
import { message, status } from "./statusMessage.js";
export const initializeAdminData = async ()=>{
    try{
        const result = await adminSchema.find();
        if(result.length==0){
            console.log("Admin Credential is going to be inserted..");            
            var adminObj = {
                email : "admin@gmail.com",
                password : await bcrypt.hash('12345678',10)
            }
            await adminSchema.create(adminObj);
            console.log("Admin credential is inserted..");
        }else{
            console.log("Admin Credential already available");
        }
        return true;
    }catch(error){
        console.log("Error while initializeAdminData : ",error);
        return false;
    }
}