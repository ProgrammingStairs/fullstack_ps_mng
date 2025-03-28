import { Sequelize } from "sequelize";
var sequelize = new Sequelize(
    'newseqdb',
    'root',
    'root',
    {
        host:'localhost',
        dialect:"mysql"
    }
);
sequelize.authenticate().then(()=>{
    console.log("Connection established successfully");
}).catch((error)=>{
    console.log("Error occured in dbConfig : ",error);
});

export default sequelize;