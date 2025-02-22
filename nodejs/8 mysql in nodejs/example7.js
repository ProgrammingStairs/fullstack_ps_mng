// example showing the concept of crud operation

var mysql = require('mysql2');
var readLine = require('readline');

const interface = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'studdb'
});
con.connect((error)=>{
    if(error)
        console.log("Error occured");
    else{
        console.log("Connection established successfully");
        showMenu();
    }
});
function showMenu(){
    interface.question("--Welcome to MySQL CRUD Operation Example--\nSelect any code for Proceed--\n1 for Add Student\n2 for Update Student\n3 for Delete Student\n4 for View All Student\n5 for View Specific Student\nSelect Option : ",(option)=>{
        switch(option){
            case '1' : addStud();
                        break;
            case '2' : updateStud();
                        break;
            case '3' : deleteStud();
                        break;
            case '4' : viewStud();
                        break;
            case '5' : viewSpecificStud();
                        break;
            default : console.log("Visit Again");
                      con.close();
                      interface.close();  
                      break;
        }
    });
}
// function to add student
function addStud(){
    // console.log("addStud");
    interface.question("Enter Name : ",(name)=>{
        interface.question("Enter Email : ",(email)=>{
            interface.question("Enter Password : ",(password)=>{
                interface.question("Enter Address : ",(address)=>{
                    var sqlQuery = `insert into student(name,email,password,address) values('${name}','${email}','${password}','${address}')`
                    con.query(sqlQuery,(error,result)=>{
                        if(error)
                            console.log("Error occured while adding student : ",error);
                        else{
                            console.log('\n########### Student Added Successfully ################\n');
                            showMenu();
                        }
                    });
                });
            });
        }); 
    });
}
// function to update student
function updateStud(){
    // console.log("updateStud");
    interface.question("Enter StudId : ",(studId)=>{
        const studStatus = 'select * from student where studId='+studId;
        con.query(studStatus,(error,result)=>{
            if(error)
                console.log("Error while dealing with student id in update stud : ",error);
            else{
                // console.log("studStatus : ",result);
                if(result.length!=0){
                    interface.question("Enter Updated Name : ",(name)=>{
                        interface.question("Enter Updated Email : ",(email)=>{
                            interface.question("Enter Updated Password : ",(password)=>{
                                interface.question("Enter Updated Address : ",(address)=>{
                                    var sqlQuery = 'update student set name=?,email=?,password=?,address=? where studId='+studId;
                                    var values = [name,email,password,address];
                                    con.query(sqlQuery,values,(error,result)=>{
                                        if(error)
                                            console.log("Error occured while updating student : ",error);
                                        else{
                                            console.log('\n########### Student Updated Successfully ################\n');
                                            showMenu();
                                        }
                                    });
                                });
                            });
                        }); 
                    });
            
                }else{
                    console.log("\n############## Record Not Found ####################\n");
                    showMenu();
                }
            }     
        });
    });
}
// function to delete student
function deleteStud(){
    // console.log("deleteStud");
    interface.question("Enter StudId : ",(studId)=>{
        const studStatus = 'select * from student where studId='+studId;
        con.query(studStatus,(error,result)=>{
            if(error)
                console.log("Error while dealing with student id in delete stud : ",error);
            else{
                // console.log("studStatus : ",result);
                if(result.length!=0){
                    var sqlQuery = 'delete from student where studId='+studId;
                    con.query(sqlQuery,(error,result)=>{
                        if(error)
                            console.log("Error occured while deleting student : ",error);
                        else{
                            console.log('\n########### Student deleted Successfully ################\n');
                            showMenu();
                        }
                    });
                }else{
                    console.log("\n############## Record Not Found ####################\n");
                    showMenu();
                }
            }     
        });
    });
}
// function to view student
function viewStud(){
    // console.log("viewStud");
        var sqlQuery = 'select * from student';
        con.query(sqlQuery,(error,result)=>{
            if(error)
                console.log("Error occured while deleting student : ",error);
            else{
                console.table(result);
                showMenu();
            }
        });
}
// function to view specific student
function viewSpecificStud(){
    interface.question("Enter StudEmail : ",(email)=>{
        const studStatus = "select * from student where email='"+email+"'";
        con.query(studStatus,(error,result)=>{
            if(error)
                console.log("Error while dealing with student email in fetching data : ",error);
            else{
                 console.log("result : ",result);
                if(result.length!=0){
                 console.table(result);
                 for(i=0;i<result.length;i++){
                    console.log("StudId : ",result[i].studid);
                    console.log("Name : ",result[i].name);
                    console.log("Email : ",result[i].email);
                    console.log("Password : ",result[i].password);
                    console.log("Address : ",result[i].address);
                 }  
                 showMenu();               
                }else{
                    console.log("\n############## Record Not Found ####################\n");
                    showMenu();
                }
            }     
        });
    });
}
