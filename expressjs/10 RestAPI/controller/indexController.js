import employeeSchema from "../model/employeeSchema.js";

export const addEmployeeController = async(request,response)=>{
    try{
        const res = await employeeSchema.create(request.body);
        console.log(res);
        response.status(200).json({message:"Data Inserted Successfully"});
    }catch(error){
        console.log("Error : "+error);
        response.status(500).json({message:"Internal server error"});
    }
}

export const showEmployeeController = async(request,response)=>{
    try{
        const data = await employeeSchema.find();
        response.status(200).json({message:"Data Inserted Successfully",data});
    }catch(error){
        console.log("Error : "+error);
        response.status(500).json({message:"Internal server error"});
    }
}

export const updateEmployeeController = async(request,response)=>{
    try{
        //const _id = request.body._id;
        const _id = request.params._id;
        const updateData = {
            $set : request.body
        }
        // const data = await employeeSchema.updateOne({_id},updateData);
        const data = await employeeSchema.findByIdAndUpdate({_id},updateData);
        response.status(200).json({message:"Data Updated Successfully",data});
    }catch(error){
        console.log("Error : "+error);
        response.status(500).json({message:"Internal server error"});
    }
}

export const deleteEmployeeController = async(request,response)=>{
    try{
        const _id = request.params._id;
        // const data = await employeeSchema.deleteOne({_id});
        const data = await employeeSchema.findByIdAndDelete({_id});
        response.status(200).json({message:"Data Deleted Successfully",data});
    }catch(error){
        console.log("Error : "+error);
        response.status(500).json({message:"Internal server error"});
    }
}