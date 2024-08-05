/*
 * 
 * Business folder
 * 
 */

const dataLayer = require('companydata');

class Company {
    
    deleteAll(company) {
        let comp = dataLayer.deleteCompany(company);

        if (comp >= 1) {
        
            return {"success": "Deleted all records for the given company " + company + "."};
        }
        
        return {"error:": "No company deleted. Company " + company + " was not found."};
    }//end of method
}//end of class

module.exports = new Company();