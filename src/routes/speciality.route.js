const express = require('express');
const router = express.Router();

const specialityController = require('../controllers/speciality.controller');

// get all speciality
router.get('/', specialityController.getSpecialityList);

//get speciality by ID
router.get('/:id', specialityController.getSpecialityByID);

//create new speciality
router.post('/', specialityController.createNewSpeciality);

//update speciality
router.put('/:id', specialityController.updateSpeciality);

//delete speciality
router.delete('/:id', specialityController.deleteSpeciality);

module.exports = router;