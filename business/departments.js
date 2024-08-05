/*
 * Business folder
 */

const dataLayer = require('companydata');
const validator = require('./validator');

class Departments {
    
    get(company){
        let response;
        if (company){
            let result = dataLayer.getAllDepartment(company);
            if(result.length > 0) {
                response = result;
            }else {
                response = {"error": "No department found for company " + company + ". "};
            }
        } else {
            response = { "error": "The company name is missing." };
        }
        //TODO: implement post request for department
        return response;
    }//end of get
    
}//end of class

module.exports = new Departments();

