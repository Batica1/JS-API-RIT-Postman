/*
 * Business folder
 */
const dataLayer = require('companydata');
const validator = require('./validator');

class Timecard {
    get(company, timecard_id) {
        let response;
        if (company && timecard_id) {
            let result = dataLayer.getTimecard(timecard_id);
            if (result !== null) {
                response = result;
            } else {
                response = {"error": "No timecard found for " + company + ' with id ' + timecard_id + '.'};
            }
        } else {
            response = {"error": "Invalid company and timecard_id."};
        }
        //TODO: implement post request for department
        return response;
    }//end of method
   
    post(company, emp_id, start_time,end_time) {
        let response;
        if (company) {
            if (!validator.validateEmpId(emp_id)) {
                return {"error": "No timecard created because employee with id " + emp_id + " does not exist."};
            }
            
            if (!validator.validateStartTimeWithEmployee(emp_id, start_time)) {
                return {"error:": "start_time must not be on the same day as any other start_time for that employee."};
            }
            
            if (!validator.validateTime(start_time)) {
                return {"error:": "No timecard created because start time must be between the hours of 06:00:00 and 18:00:00 inclusive."};
            }
            
            if (!validator.validateTime(end_time)) {
                return {"error:": "No timecard created because end time must be between the hours of 06:00:00 and 18:00:00 inclusive."};
            }

            if (!validator.validateDayOfWeek(start_time)) {
                return {"error": "start time cannot be Saturday or Sunday"};
            }
            
            if (!validator.validateDayOfWeek(end_time)) {
                return {"error": "end time cannot be Saturday or Sunday"};
            }
            
            if (!validator.validateStartTime(start_time)) {
                return {"error": "start_time must be a valid date and time equal to the current date or up to 1 week ago from the current date"};
            }
            if (!validator.validateEndTime(start_time, end_time)) {
                return {"error": "end_time must be a valid date and time at least 1 hour greater than the start_time and be on the same day as the start_time"};
            }
            
            
            var tc = new dataLayer.Timecard(start_time,end_time,emp_id);
            let result = dataLayer.insertTimecard(tc);
            if (result !== null) {
                response = result;
            } else {
                response = {"error": "Unable to insert timecard for company " + company + "   " + emp_id + "  " + start_time};
            }
        } else {
            response = {"error": "Input data is invalid."};
        }
        //TODO: implement post request for department
        return response;
    }//end of post
    
    
    put(company, emp_id ,timecard_id, start_time,end_time) {
        let response;
        if (company) {
            if (!validator.validateTimecardId(timecard_id)) {
                return {"error": "No timecard updated because timecard with id " + timecard_id + " does not exist." };
            }
            if (!validator.validateEmpId(emp_id)) {
                return {"error": "No timecard updated because employee with id " + emp_id + " does not exist."};
            }
            
            if (!validator.validateTime(start_time)) {
                return {"error:": "No timecard created because start time must be between the hours of 06:00:00 and 18:00:00 inclusive."};
            }
            
            if (!validator.validateTime(end_time)) {
                return {"error:": "No timecard created because end time must be between the hours of 06:00:00 and 18:00:00 inclusive."};
            }
            
            if (!validator.validateDayOfWeek(start_time)) {
                return {"error": "start time cannot be Saturday or Sunday"};
            }
            
            if (!validator.validateDayOfWeek(end_time)) {
                return {"error": "end time cannot be Saturday or Sunday"};
            }
            
            if (!validator.validateStartTime(start_time)) {
                return {"error": "start_time must be a valid date and time equal to the current date or up to 1 week ago from the current date"};
            }
            if (!validator.validateEndTime(start_time, end_time)) {
                return {"error": "end_time must be a valid date and time at least 1 hour greater than the start_time and be on the same day as the start_time"};
            }
            
            
            
            
            if (!validator.validateStartTimeWithEmployee(emp_id, start_time)) {
                return {"error:": "start_time on given date with emp_id -> " + emp_id + " exist"};
            }
            
            var tc = new dataLayer.Timecard(start_time,end_time,emp_id,timecard_id);
            let result = dataLayer.updateTimecard(tc);
            
            if (result !== null) {
                response = result;
            } else {
                response = {"error": "Unable to update timecard for company " + company + "."};
            }
        } else {
            response = {"error": "Input data is invalid."};
        }
        
        //TODO: implement post request for department
        return response;
    }//end of method
    
    delete(company, timecard_id) {
        let response;
        if (company && timecard_id) {
            let result = dataLayer.deleteTimecard(timecard_id);
            if (result >= 1) {
                response = {"success": "Timecard with id " + timecard_id + " successfully deleted."};
            } else {
                response = {"error": "No timecard with id " + timecard_id + ' found.'};
            }
        } else {
            response = {"error": "Invalid timecard_id."};
        }
        //TODO: implement post request for department
        return response;
    }//end of method
    
   
}//end of class

module.exports = new Timecard();

