const express = require('express');
const router = express.Router();

const campusController = require('../controllers/campus.controller');

// get all campus
router.get('/', campusController.getCampusList);

//get campus by ID
router.get('/:id', campusController.getCampusByID);

//create new campus
router.post('/', campusController.createNewCampus);

//update campus
router.put('/:id', campusController.updateCampus);

//delete campus
router.delete('/:id', campusController.deleteCampus);

module.exports = router;