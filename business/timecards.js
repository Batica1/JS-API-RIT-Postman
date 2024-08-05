/*
 * 
 * Business folder
 * 
 */

const dataLayer = require('companydata');

class Timecards {
    
    
    get(company, emp_id){
        let response;
        if (company && emp_id){
            let result = dataLayer.getAllTimecard(emp_id);
           
            if(result.length > 0) {
                response = result;
            }else {
               response =  { "error": "No timecards found for employee with id " + emp_id + "."};
            }
        } else {
            response = { "error": "Invalid data for timecards... please check the query." };
        }
        //TODO: implement post request for department
        return response;
    }//end of get
}//end of class

module.exports = new Timecards();

