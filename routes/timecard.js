/*
 * routes folder
 */
const express = require('express');
const router = express.Router();

const timecard = require('../business/timecard');

router.get('/', (req, res) => {
    res.json(timecard.get(req.query.company, req.query.timecard_id));
});

// company, emp_id, timecard_id , start_time , end_time
router.post('/', (req, res) => {
    res.json(timecard.post(req.body.company, req.body.emp_id, req.body.start_time , req.body.end_time));
}); 

//company, emp_id ,timecard_id, start_time,end_time
router.put('/', (req, res) => {
    res.json(timecard.put(req.body.company, req.body.emp_id, req.body.timecard_id, req.body.start_time , req.body.end_time));
}); 

router.delete('/', (req, res) => {
    res.json(timecard.delete(req.query.company, req.query.timecard_id));
});


module.exports = router;