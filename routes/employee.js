/*
 * routes folder
 */

const express = require('express');
const router = express.Router();

const employee = require('../business/employee');

router.get('/', (req, res) => {
    res.json(employee.get(req.query.company, req.query.emp_id));
});

 router.post('/', (req, res) => {
    res.json(employee.post(req.body.company, req.body.emp_name, req.body.emp_no, req.body.hire_date , req.body.job , req.body.salary
            , req.body.dept_id , req.body.mng_id));
}); 

// company, emp_name, emp_no, hire_date , job , salary , dept_id , mng_id
 router.put('/', (req, res) => {
    res.json(employee.post(req.body.company, req.body.emp_name, req.body.emp_no, req.body.hire_date , req.body.job , req.body.salary
            , req.body.dept_id , req.body.mng_id));
});

router.delete('/', (req, res) => {
    res.json(employee.delete(req.query.company, req.query.emp_id));
});


module.exports = router;