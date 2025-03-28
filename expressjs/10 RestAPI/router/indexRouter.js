import express from 'express';
import { addEmployeeController,showEmployeeController,updateEmployeeController, deleteEmployeeController } from '../controller/indexController.js';
var indexRouter = express.Router();
indexRouter.post('/addEmployeeData',addEmployeeController);
indexRouter.get('/showEmployeeData',showEmployeeController);
// indexRouter.put('/updateEmployeeData',updateEmployeeController);
indexRouter.put('/updateEmployeeData/:_id',updateEmployeeController);

indexRouter.delete('/deleteEmployeeData/:_id',deleteEmployeeController);

export default indexRouter;

/*
localhost:3000/showData

<-------web url------------>
https://www.abc.com/showData

https = protocol
www.abc.com = domain 
/showData = api endpoint

here /showData is your api endpoint

/updateData
/deleteData
/showData
/searchById 
here all these are considered as api end point
*/