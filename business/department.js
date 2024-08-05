/*
 * 
 * Business folder
 * 
 */

const dataLayer = require('companydata');
const validator = require('./validator');

class Department {

    get(company, id) {
        let response;
        if (company) {
            let department = dataLayer.getDepartment(company, id);
            if (department !== null) {
                response = department;
            } else {
                response = {"error": "No department found for company " + company + " and id " + id + "."};
            }
        } else {
            response = {"error": "The company name is missing."};
        }
        
        return response;
    }//end of get
   
     post(company, dept_name, dept_no, location) {
        let response;
        if (company) {
            if (!validator.validateDeptNo(company, dept_no)) {
                response = {"error:": "No department updated for company " + company + ". Department number is not unique."};
                return response;
            }//end of if
            
            var dept = new dataLayer.Department(company, dept_name, dept_no, location);
            let department = dataLayer.insertDepartment(dept);
            
            if (department !== null) {
                response = department;
            } else {
                response = {"error": "Cannot create department for company " + company + "."};
            }
        } else { response = {"error": "The company name is missing."}; }
        
        //TODO: implement post request for department
        return response;
    }
     
    
    put(company, dept_id, dept_name, dept_no, location) {
        let response;
        if (company) {
            if (!validator.validateDeptNo(company, dept_no)) {
                response = {"error:": "No department updated for company " + company + ". Department number is not unique."};
                return response;
            }
            if (!validator.validateDeptId(company, dept_id)) {
                response = {"error:": "No department updated for company " + company + ". Department with id " + dept_id + " does not exist. "};
                return response;
            }
            
            var dept = new dataLayer.Department(company, dept_name, dept_no, location , dept_id);
            //console.log(dept);
            

            let result = dataLayer.updateDepartment(dept);
            
            if (result !== null) {
                response = result;
            } else {
                response = {"error": "Unable to update department for company " + company + "."};
            }
        } else {
           response = {"error": "The company name is missing."};
        }
        //TODO: implement post request for department
        return response;
    }
    
    
    delete(company, id) {
        let response;
        if (company && id) {
            let result = dataLayer.deleteDepartment(company, id);
            if (result >= 1) {
                response = {"success": "Department " + id + " from " + company + " successfully deleted."};
            } else {
                response = {"error": "No department with id " + id + "deleted from " + company + " because it does not exist."};
            }
        } else {
            response = {"error": "Input data is invalid."};
        }
        //TODO: implement post request for department
        return response;
    }//end of method
    
    
}//end of class

module.exports = new Department();