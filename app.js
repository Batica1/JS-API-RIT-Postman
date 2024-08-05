
/*
 * app.js
 */
const express = require('express');
const app = express();
const port = 8080;

const baseURL = "/KurfurstDP3/CompanyServices";

const departmentRouter = require('./routes/department');

const departmentsRouter = require('./routes/departments');

const employeesRouter = require('./routes/employees');

const employeeRouter = require('./routes/employee');

const timecardsRouter = require('./routes/timecards');

const timecardRouter = require('./routes/timecard');  

const companyRouter = require('./routes/company');


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(`${baseURL}/department` , departmentRouter);
app.use(`${baseURL}/departments`, departmentsRouter);

app.use(`${baseURL}/employees`, employeesRouter);
app.use(`${baseURL}/employee`, employeeRouter);
//
app.use(`${baseURL}/timecards`, timecardsRouter);
app.use(`${baseURL}/timecard`, timecardRouter);

app.use(`${baseURL}/company`, companyRouter);

app.listen(port , ()=>{
    console.log(`App running at http://localhost:${port}/`);   
});





