import con from "../connection/dbConfig.js";

export const checkDatabase =  (req, res, next) => {
    try {
        const checkQuery = `SELECT COUNT(*) as exist FROM information_schema.tables WHERE table_schema = '${process.env.DATABASE_NAME}' AND table_name = 'user'`;

        con.query(checkQuery, (error, result) => {
            if (error) {
                console.error("Error in checkDatabase:", error);
                return next(error); // Pass error to Express error handler
            }
            if (result[0].exist > 0) {
          //      console.log("Database and table already exist");
                return next(); // Proceed to next middleware
            } else {
             
                // First, create the database
                const dbQuery = "CREATE DATABASE IF NOT EXISTS mysqlcrud";
                con.query(dbQuery, (error) => {
                    if (error) {
                        console.error("Error in creating database:", error);
                        return next(error);
                    }

            //        console.log("Database created successfully");
                   // Switch to the new database
                    const useDbQuery = `USE ${process.env.DATABASE_NAME}`;
                    con.query(useDbQuery, (error) => {
                        if (error) {
                            console.error("Error switching to database:", error);
                            return next(error);
                        }

                        // Now create the table
                        const tableQuery = `
                            CREATE TABLE IF NOT EXISTS user (
                                userid INT AUTO_INCREMENT PRIMARY KEY,
                                username VARCHAR(45) NOT NULL,
                                email VARCHAR(45) NOT NULL unique,
                                password VARCHAR(45) NOT NULL,
                                address VARCHAR(45) NOT NULL,
                                status tinyint not null default 1,
                                adminVerify tinyint not null default 0
                            )`;

                        con.query(tableQuery, (error) => {
                            if (error) {
                                console.error("Error in table creation:", error);
                                return next(error);
                            }

              //              console.log("Table created successfully");
                            return next(); // Proceed to next middleware after table creation
                        });
                    });
                });
            }
        });
    } catch (error) {
        console.error(error);
        return next(error);
    }
};
