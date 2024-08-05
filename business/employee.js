/*
 * Business folder
 */

const dataLayer = require('companydata');
const validator = require('./validator');

class Employee {
    
    
    get(company, emp_id) {
        let response;
        if (company && emp_id) {
            let result = dataLayer.getEmployee(emp_id);
            if (result !== null) {
                response = result;
            } else {
                response = {"error": "No employee with id " + emp_id + ' found.'};
            }
        } else {
            response = {"error": "Invalid query for employee."};
        }
        //TODO: implement post request for department
        return response;
    }//end of get
    
    post(company,emp_name , emp_no , hire_date , job , salary , dept_id , mng_id , emp_id) {
        let response;
        if (company) {
            
            if(!validator.validateDeptId(company, dept_id)) {
                return {"error": "No employee created because department with a given department id does not exist."};
            }//
            
            if(!validator.validateMngId(company, mng_id)) {
                return {"error": "No employee created because given manager id does not exist."};
            }//
            
            if(!validator.validateWorkingHireDate(hire_date)) {
                return {"error": "hire_date must be a Monday, Tuesday, Wednesday, Thursday or a Friday. It cannot be Saturday or Sunday."};
            }//
            
            if(!validator.validateHireDate(hire_date)) {
                return {"error": "No employee created because hire date is not a valid date. Hire date must be either current date or earlier."};
            }
            //
            if(!validator.validateEmpNo(company, emp_no)) {
                return {"error": "emp_no must be unique amongst all employees in the database"};
            }
            
            if(dataLayer.getAllEmployee(company).length === 0) mng_id = 0;

            var emp = new dataLayer.Employee(emp_name , emp_no , hire_date , job , salary , dept_id , mng_id , emp_id);
            
            let result = dataLayer.insertEmployee(emp);
            
            if(result !== null) {
                response = result;
            } else {
                response = {"error": "Unable to insert employee for company " + company + "."};
            }
        } else {  response = {"error": "Wrong data"}; }
        //TODO: implement post request for department
        return response;
    }
    
    //put
    
    put(company, emp_name , emp_no , hire_date , job , salary , dept_id , mng_id , emp_id) {
        let response;
        if (company) {

            if(!validator.validateEmpId(emp_id)) {
                return {"error": "No employee updated because given employee id does not exist."};
            }
            
            if(!validator.validateDeptId(company, dept_id)) {
                return {"error": "No employee created because department with a given department id does not exist."};
            }
            
            if(!validator.validateMngId(company, mng_id)) {
                return {"error": "No employee created because given manager id does not exist."};
            }
            
            if(!validator.validateHireDate(hire_date)) {
                return {"error": "No employee created because hire date is not a valid date. Hire date must be either current date or earlier."};
            }
            
            if(!validator.validateWorkingHireDate(hire_date)) {
                return {"error": "No employee created because hire date is not a working week day."};
            }
            
            if(!validator.validateEmpNo(company, emp_no)) {
                return {"error": "No employee created because employee number already exists."};
            }
            
            var emp = new dataLayer.Employee(emp_name , emp_no , hire_date , job , salary , dept_id , mng_id , emp_id);

            let result = dataLayer.updateEmployee(emp);
            if (result !== null) {
                response = result;
            } else {
                response = {"error": "Unable to update employee for company " + company + "."};
            }
        } else {  response = {"error": "Wrong data"}; }
        
        //TODO: implement post request for department
        return response;
    }//end of method
    
    delete(company, emp_id) {
        let response;
        if (company && emp_id) {
            let result = dataLayer.deleteEmployee(emp_id);
            
            if (result >= 1) {
                response = {"success": "Employee with id " + emp_id + " is deleted."};
            } else {
                response = {"error": "No employee found for " + company + ' with id ' + emp_id + '.'};
            }
        } else {
            response = {"error": "Invalid company and emp_id."};
        }
        //TODO: implement post request for department
        return response;
    }
     
    
}//end of class

module.exports = new Employee();

