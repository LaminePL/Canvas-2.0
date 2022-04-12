const express = require('express');
const router = express.Router();

const moduleController = require('../controllers/module.controller');

// get all modules
router.get('/', moduleController.getModuleList);

//get module by ID
router.get('/:id', moduleController.getModuleByID);

//create new module
router.post('/', moduleController.createNewModule);

//update module
router.put('/:id', moduleController.updateModule);

//delete module
router.delete('/:id', moduleController.deleteModule);

module.exports = router;