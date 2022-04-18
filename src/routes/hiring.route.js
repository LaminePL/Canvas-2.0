const express = require('express');
const router = express.Router();

const hiringController = require('../controllers/hiring.controller');

// get all hiring
router.get('/', hiringController.getHiringList);

//get hiring by ID
router.get('/:id', hiringController.getHiringByID);

//create new hiring
router.post('/', hiringController.createNewHiring);

//update hiring
router.put('/:id', hiringController.updateHiring);

//delete hiring
router.delete('/:id', hiringController.deleteHiring);

module.exports = router;