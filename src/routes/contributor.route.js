const express = require('express');
const router = express.Router();

const contributorController = require('../controllers/contributor.controller');

// get all contributor
router.get('/', contributorController.getContributorList);

//get contributor by ID
router.get('/:id', contributorController.getContributorByID);

//create new contributor
router.post('/', contributorController.createNewContributor);

//update contributor
router.put('/:id', contributorController.updateContributor);

//delete contributor
router.delete('/:id', contributorController.deleteContributor);

module.exports = router;