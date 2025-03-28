import con from "../connection/dbConfig.js";
export const adminLoginController = (request, response) => {
    const { email, password } = request.body;
    const loginQuery = 'select * from admin where email=? and password =?';
    const values = [email, password];
    con.query(loginQuery, values, (error, result) => {
        if (error)
            console.log("Error while admin login : ", error);
        else {
            console.log("Admin Login Successfull");
            request.session.email = email;
            request.session.save();
            response.render("adminProfile.ejs", { adminEmail: email });
        }
    });
}

export const adminViewUserController = (request, response) => {
    const listQuery = 'select * from user';
    con.query(listQuery, (error, result) => {
        if (error)
            console.log("Error occured in admin view user controller : ", error);
        else {
            // console.log(result);
            response.render("adminViewUser.ejs", { adminEmail: request.session.email, userList: result });
        }
    });
}

export const adminVerifyUserController = (request, response) => {
    const userId = request.query.userId;
    const updateQuery = 'update user set adminVerify = ? where userId = ?';
    const values = [1, userId];
    con.query(updateQuery,values, (error, result) => {
        if (error)
            console.log("Error occured in adminVerifyUserController : ", error);
        else {
            // console.log("update result : ", result);
            const listQuery = 'select * from user';
            con.query(listQuery, (error, result) => {
                if (error)
                    console.log("Error occured in admin verify user controller : ", error);
                else {
                    // console.log(result);
                    response.render("adminViewUser.ejs", { adminEmail: request.session.email, userList: result });
                }
            });
        }
    });
}

export const adminBlockUserController = (request, response) => {
    const userId = request.query.userId;
    const updateQuery = 'update user set status = ? where userId = ?';
    const values = [0, userId];
    con.query(updateQuery,values, (error, result) => {
        if (error)
            console.log("Error occured in adminBlockUserController : ", error);
        else {
            // console.log("update result : ", result);
            const listQuery = 'select * from user';
            con.query(listQuery, (error, result) => {
                if (error)
                    console.log("Error occured in admin block user controller : ", error);
                else {
                    // console.log(result);
                    response.render("adminViewUser.ejs", { adminEmail: request.session.email, userList: result });
                }
            });
        }
    });
}