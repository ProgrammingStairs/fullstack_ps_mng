import con from "../connection/dbConfig.js";

export const adminDatabase =  (req, res, next) => {
    try {
        const checkQuery = `SELECT COUNT(*) as exist FROM information_schema.tables WHERE table_schema = '${process.env.DATABASE_NAME}' AND table_name = 'admin'`;

        con.query(checkQuery, (error, result) => {
            if (error) {
                console.error("Error in adminDatabase:", error);
                return next(error); // Pass error to Express error handler
            }
            console.log("Result:", result);
            if (result[0].exist > 0) {
                //console.log("Database and admin table already exist");
                return next(); // Proceed to next middleware
            } else {

                        // Now create the table
                        const tableQuery = `
                            CREATE TABLE IF NOT EXISTS admin (
                                email VARCHAR(45) NOT NULL,
                                password VARCHAR(45) NOT NULL)`;

                        con.query(tableQuery, (error) => {
                            if (error) {
                                console.error("Error in table creation:", error);
                                return next(error);
                            }
                            else{
                  //              console.log("Table created successfully");
                                const insertAdminData = 'insert into admin(email,password) values("admin@gmail.com","12345678")';
                                con.query(insertAdminData,(error)=>{
                                    if(error)
                                        console.log("Error while inserting admin details in table : ",error);
                                    else{
                    //                    console.log("Admin Data inserted successfully");
                                        return next(); // Proceed to next middleware after table creation
                                    }    
                                });
                            }
                        });
            }
        });
    } catch (error) {
        console.error(error);
        return next(error);
    }
};
