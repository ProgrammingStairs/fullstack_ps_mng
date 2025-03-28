import moment from "moment";
import con from "../connection/dbConfig.js";
export const userRegistrationController = (request, response) => {
    // console.log(request.body);
    const insertQuery = 'insert into user(username,email,password,address) values(?,?,?,?)';
    const insertValues = [
        request.body.username,
        request.body.email,
        request.body.password,
        request.body.address
    ];
    con.query(insertQuery, insertValues, (error, result) => {
        if (error)
            console.log("Error Occured in userRegistrationController : ", error);
        else {
            console.log("result : ", result);
            response.render("login.ejs",{message:""});
        }
    });
}

export const userLoginController = (request, response) => {
    const { email, password } = request.body;
    const loginQuery = 'select * from user where email=? and password =?';
    const values = [email, password];
    con.query(loginQuery, values, (error, result) => {
        if (error)
            console.log("1 email-password Error while user login : ", error);
        else {
            if(result.length==0)
                response.render("login.ejs",{message:"Email Id or Password is Wrong"});
            else{
                const verifyQuery = 'select * from user where email=? and adminVerify =?';
                const values = [email,1];
                con.query(verifyQuery, values, (error, result) => {
                    if (error)
                        console.log("2 admin verify Error while user login : ", error);
                    else {
                        if(result.length==0)
                            response.render("login.ejs",{message:"Please wait utill Admin Verify"});
                        else{    
                            const statusQuery = 'select * from user where email=? and status =?';
                            const values = [email,1];
                            con.query(statusQuery, values, (error, result) => {
                                if (error)
                                    console.log("3 status Error while user login : ", error);
                                else {
                                    if(result.length==0)
                                        response.render("login.ejs",{message:"You are blocked by Admin"});
                                    else{ 
                                        console.log("User Login Successfull");
                                        request.session.email = email;
                                        request.session.save();
                                        response.render("userHome.ejs", { userEmail: email,message:"" });
                                    }
                                }
                            });
                        }        
                    }
                });
            }
        }
    });
}

export const updateProfileController = (request,response)=>{
    var email = request.query.email;
    var selectQuery = 'select * from user where email=?';
    var value = [email];
    con.query(selectQuery,value,(error,result)=>{
        if(error)
            console.log("Error while dealing with updateProfile : ",error);
        else{
            // console.log(result);
            response.render("userProfileForm.ejs",{userData:result[0],userEmail:request.session.email});
        }
    });
}

export const userUpdateProfileController = (request,response)=>{
    try{
        // console.log(request.body);
        const {username,email,password,address} = request.body;
        var updateQuery = 'update user set username=?, email=?, password=?, address=? where email = ?';
        var value = [username,email,password,address,email];
        con.query(updateQuery,value,(error,result)=>{
            if(error)
                console.log("Error in userUpdateProfileController : ",error);
            else{
                response.render("userHome.ejs",{userEmail:request.session.email,message:"Profile Updated Successfully"});
            }
        });
    }catch(error){
        console.log("error in userUpdateProfileController : ",error);
        
    }
}

export const addToDoController = (request,response)=>{
    try{    
        const {todo,priority} = request.body;
        const date = moment(new Date()).format("DD-MM-YYYY");
        const time = moment(new Date()).format("hh:mm:ss a");
        const insertQuery = "insert into todo(todo,priority,date,time) values(?,?,?,?)";
        const values = [todo,priority,date,time];
        con.query(insertQuery,values,(error,result)=>{
            if(error)
                console.log("Error in add to do controller : ",error);
            else{
                console.log("Result : ",result);
                response.render("addToDoForm.ejs",{userEmail:request.session.email,message:"ToDo Task Added Successfully"});
            }
        });   
    }catch(error){
        console.log("Error while dealing with add to do controller : ",error);
    }
}

export const userLogoutController = (request,response)=>{
    try{
        request.session.email = '';
        request.session.destroy((error)=>{
            if(error)
                console.log("Error occured while logout : ",error);
            else
                response.render("login.ejs",{message:"Logout Successfully"});    
        });
    }catch(error){
        console.log("Error while user logout : ",error);
        response.render("userHome.ejs",{userEmail:request.session.email,message:""});
    }
}