var dl = require("companydata");
const company_name = "dk4368"; //replace this with your company name

//DEPARTMENT -------------------------------------------------------------------

/* var dept = new dl.Department(company_name,"IT","d50basdasddfvks","rochester");
 dept = dl.insertDepartment(dept);
 if (dept.getId() > 0) {
    console.log("inserted id: "+ dept.getId());
 } else {
    console.log("Not inserted");
 } */
//
// var departments = dl.getAllDepartment(company_name);
//console.log("-------- DEPARTMENTS -------------------------------------------");
//for (var d of departments) {
//    console.log(d.getId());
//    console.log(d.getCompany());
//    console.log(d.getDeptName());
//    console.log(d.getDeptNo());
//    console.log(d.getLocation());
//    console.log("--------");
//}
//
///*var department = dl.getDepartment(company_name, 300);
//console.log("\n\nCurrent Department:");
//console.log(department.getId());
//console.log(department.getCompany());
//console.log(department.getDeptName());
//console.log(department.getDeptNo());
//console.log(department.getLocation()); */
//
//// department.setDeptName("Computing");
//// department = dl.updateDepartment(department);
//// console.log("\n\nUpdated Department:");
//// console.log(department.getId());
//// console.log(department.getCompany());
//// console.log(department.getDeptName());
//// console.log(department.getDeptNo());
//// console.log(department.getLocation());
//
////var deleted = dl.deleteDepartment(company_name, 5);
////if (deleted >= 1) {
////    console.log("\nDepartment deleted");
////} else {
////    console.log("\nDepartment not deleted");
////}
//
////EMPLOYEE ---------------------------------------------------------------------
//
///* var emp = new dl.Employee("French_1", "bdfvkse3", "2018-06-19", "Developer", 50000.00, 500, 0);
// emp = dl.insertEmployee(emp);
//if (emp.getId() > 0) {
//    console.log("inserted id: " + emp.getEmpName());
//    console.log("inserted id: " + emp.getId());
//    console.log("date hired: " + emp.getHireDate());
//} else {
//    console.log("Not inserted");
//}
//*/
//var employees = dl.getAllEmployee(company_name);
//console.log("-------- EMPLOYEES ---------------------------------------------");
//for (var emp of employees) {
//    console.log(emp.getId());
//    console.log(emp.getEmpName());
//    console.log(emp.getEmpNo());
//    console.log(emp.getHireDate());
//    console.log(emp.getJob());
//    console.log(emp.getSalary());
//    console.log(emp.getDeptId());
//    console.log(emp.getMngId());
//    console.log("--------");
//}
//
//var employee = dl.getEmployee(15);
////console.log("--------");
////console.log(employee.getId());
////console.log(employee.getEmpName());
////console.log(employee.getEmpNo());
////console.log(employee.getHireDate());
////console.log(employee.getJob());
////console.log(employee.getSalary());
////console.log(employee.getDeptId());
////console.log(employee.getMngId());
////console.log("--------\n\n");
//
////employee.setSalary(60000.00);
////employee = dl.updateEmployee(employee);
////console.log("\n\nUpdated Employee:");
////console.log(employee.getId());
////console.log(employee.getEmpName());
////console.log(employee.getEmpNo());
////console.log(employee.getHireDate());
////console.log(employee.getJob());
////console.log(employee.getSalary());
////console.log(employee.getDeptId());
////console.log(employee.getMngId());
////console.log("--------\n\n");
//
////var deletedEmp = dl.deleteEmployee(15);
////if (deletedEmp >= 1) {
////    console.log("\nEmployee deleted");
////} else {
////    console.log("\nEmployee not deleted");
////}
//
//
////TIMECARD ---------------------------------------------------------------------

var tc = new dl.Timecard("2022-05-12 10:30:00", "2022-05-12 17:30:00", 733);
tc = dl.insertTimecard(tc);
console.log(tc);
if (tc.getId() > 0) {
    console.log("inserted id: " + tc.getId());
} else {
    console.log("Not inserted");
} 

var timecards = dl.getAllTimecard(733);
console.log("-------- TIMECARDS ---------------------------------------------");
for (var tcard of timecards) {
    console.log(tcard.getId());
    console.log(tcard.getStartTime());
    console.log(tcard.getEndTime());
    console.log(tcard.getEmpId());
    console.log("--------");
} 

////var timecard = dl.getTimecard(1);
////console.log("\n\nCurrent Timecard:");
////console.log("--------");
////console.log(timecard.getId());
////console.log(timecard.getStartTime());
////console.log(timecard.getEndTime());
////console.log(timecard.getEmpId());
////console.log("--------\n\n");
//
////timecard.setEndTime("2018-06-19 19:30:00");
////timecard = dl.updateTimecard(timecard);
//
////console.log("\n\nUpdated Timecard:");
////console.log("--------");
////console.log(timecard.getId());
////console.log(timecard.getStartTime());
////console.log(timecard.getEndTime());
////console.log(timecard.getEmpId());
////console.log("--------\n\n");
//
////var deletedTC = dl.deleteTimecard(1);
////if (deletedTC >= 1) {
////    console.log("\nTimecard deleted");
////} else {
////    console.log("\nTimecard not deleted");
////}
//
////dl.deleteCompany(company_name);     