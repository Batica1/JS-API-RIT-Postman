/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


const dataLayer = require('companydata');

class Validator {
    
    
    validateMngId(company, mng_id) {
        let employees = dataLayer.getAllEmployee(company);
        if (employees.length === 0) {
            mng_id = 0;
            return true;
        }
        mng_id = parseInt(mng_id);
        for (let index = 0; index < employees.length; index++) {
            const element = employees[index].getId();
            if ((element === mng_id) || (mng_id === 0)) {
                return true;
            }
        }//end of for 
        return false;
    }//end of method

    validateDeptNo(company, dept_no) {
        let dep = dataLayer.getAllDepartment(company);

        for (let index = 0; index < dep.length; index++) {
            const result = dep[index];
            if (dept_no === result.getDeptNo()) {
                return false;
            }
        }//end of for

        return true;
    }//end of method

    validateHireDate(date) {
        let sentDate = new Date(date);
        let currentDate = new Date();
        if (sentDate > currentDate)
            return false;
        return true;
    }//end of method

    validateWorkingHireDate(date) {
        let weekDay = new Date(date).getDay();
        if (weekDay === 6 || weekDay === 0) {
            return false;
        }
        return true;
    }//end of method

    validateEmpNo(company, emp_no) {
        let employees = dataLayer.getAllEmployee(company);
        parseInt(emp_no);
        for (let index = 0; index < employees.length; index++) {
            const element = employees[index].getEmpNo();
            if (emp_no === element) {
                return false;
            }
        }//end of for
        return true;
    }//end of method

    validateEmpId(emp_id) {
        let emp = dataLayer.getEmployee(emp_id);
        return emp !== null;
    }
    
    validateDeptId(company, dept_id) {
        let dep = dataLayer.getDepartment(company, dept_id);
        return dep !== null;
    }//end of method
    
     validateDayOfWeek(dayOfWeek) {
        let day = new Date(dayOfWeek).getDay();
        if (day === 0 || day === 6) { return false; }
        return true;
    }//end of method

    validateStartTime(start) {
        let date = new Date(start);
        let current = new Date();
        let week = new Date();
        week.setDate(current.getDate() - 7);

        if (date > current || date < week) return false; else return true;
    }//end of method

    validateEndTime(start_time, end_time) {
        let date_start = new Date(start_time);
        let date_end = new Date(end_time);

        if (date_end.getHours() >= (date_start.getHours()+1) && date_end.getDay() === date_start.getDay()) return true; 
        else return false;
    }//end of method

   
    validateTimecardId(timecard_id) {
        let timecard = dataLayer.getTimecard(timecard_id);
        if (timecard === null) return false;
        return true;
    }//end of method
    

    validateStartTimeWithEmployee(emp_id, startTime) {
        let timecards = dataLayer.getAllTimecard(emp_id);
        let startDate = new Date(startTime);

        for (let i = 0; i < timecards.length; i++) {
            const timecardStartDate = new Date(timecards[i].getStartTime());
            if (timecardStartDate.getDate() === startDate.getDate()) {  return false; }
        }//end of for
        return true;
    }//end of method
    
    validateTime(time) {
        let start = new Date();
        let end = new Date();
        
          //start_time and end_time must be between the hours (in 24 hour format) of 06:00:00 and 18:00:00 inclusive.
          start.setHours(6);
          end.setHours(18);
        
        let date = new Date(time).getHours();

        if (date < start.getHours() || date > end.getHours())
            return false;
        return true;
    } //end of method
    
    
   
}//end of class


module.exports = new Validator();




