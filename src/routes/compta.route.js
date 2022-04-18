const express = require('express');
const router = express.Router();

const comptaController = require('../controllers/compta.controller');

// get all compta
router.get('/', comptaController.getComptaList);

//get compta by ID
router.get('/:id', comptaController.getComptaByID);

//create new compta
router.post('/', comptaController.createNewCompta);

//update compta
router.put('/:id', comptaController.updateCompta);

//delete compta
router.delete('/:id', comptaController.deleteCompta);

module.exports = router;