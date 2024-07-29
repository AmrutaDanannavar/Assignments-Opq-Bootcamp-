const express = require('express')
const router = express.Router();
const error_handler = require('../Controllers/error_handler')
const {register,getstudentdashboard} = require('../Controllers/register_controller');
const { attendence, getattendence } = require('../Controllers/attendence_controller');
const { lectures, getlectures, updatelecture, getLecturesForBatch } = require('../Controllers/lectures_controller');
const { assignments, getassignment, updateassignment, getassignmentbystudent } = require('../Controllers/assignments_controller');
const { getlistofclasses } = require('../Controllers/classes_controller');
const { lessons, updatelesson } = require('../Controllers/lessons_controller');


router.post("/registration", register)
router.get('/students/:id', getstudentdashboard);

router.post('/attendence',attendence);
router.get('/attendence/:student_id', getattendence)

router.post('/lectures',lectures)
router.get('/getlecture',getlectures)
router.get('/getlectureforbatch/:batch_id',getLecturesForBatch)
router.put('/updatelecture/:id',updatelecture)

router.post('/assignments',assignments)
router.get('/getassignments/:id', getassignment)
router.get('/getassignmentbystudent/:student_id',getassignmentbystudent)
router.put('/updateassignment/:id',updateassignment)

router.get('/classes',getlistofclasses)

router.post('/lessons',lessons)
router.put('/updatelesson/:id',updatelesson)


module.exports = router;