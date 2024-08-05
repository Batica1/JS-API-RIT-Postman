/*
 * Business folder
 */

const dataLayer = require('companydata');

class Employees {
    
    get(company){
        let response;
        if (company){
            let result = dataLayer.getAllEmployee(company);
           
            if(result.length > 0) {
                response = result;
            }else {
                response = {"error": "No showed employees for " + company + ""};
            }
        } else {
            response = { "error": "The company name is not wirtten." };
        }
        //TODO: implement post request for department
        return response;
    }
}//end of class

module.exports = new Employees();

