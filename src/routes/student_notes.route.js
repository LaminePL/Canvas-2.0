const express = require('express');
const router = express.Router();

const student_notesController = require('../controllers/student_notes.controller');

// get all student_notes
router.get('/', student_notesController.getStudent_notesList);

//get student_notes by ID
router.get('/:id', student_notesController.getStudent_notesByID);

//create new student_notes
router.post('/', student_notesController.createNewStudent_notes);

//update student_notes
router.put('/:id', student_notesController.updateStudent_notes);

//delete student_notes
router.delete('/:id', student_notesController.deleteStudent_notes);

module.exports = router;