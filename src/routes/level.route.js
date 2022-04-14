const express = require('express');
const router = express.Router();

const levelController = require('../controllers/level.controller');

// get all level
router.get('/', levelController.getLevelList);

//get level by ID
router.get('/:id', levelController.getLevelByID);

//create new level
router.post('/', levelController.createNewLevel);

//update level
router.put('/:id', levelController.updateLevel);

//delete level
router.delete('/:id', levelController.deleteLevel);

module.exports = router;