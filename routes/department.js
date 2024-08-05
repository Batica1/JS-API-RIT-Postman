/*
 * Routes folder
 */
const express = require('express');
const router = express.Router();
const department = require('../business/department');

//localhost:3000/MarasovicKP3/CompanyServices/department?company=kxmzgr&dept_id=300
router.get('/', (req, res) => {
    res.json(department.get(req.query.company, req.query.dept_id));
});

 router.post('/', (req, res) => {
    res.json(department.post(req.body.company, req.body.dept_name, req.body.dept_no, req.body.location));
}); 

router.put('/', (req, res) => {
    res.json(department.put(req.body.company, req.body.dept_id, req.body.dept_name, req.body.dept_no, req.body.location));
});

router.delete('/', (req, res) => {
    res.json(department.delete(req.query.company, req.query.dept_id));
});

module.exports = router;

