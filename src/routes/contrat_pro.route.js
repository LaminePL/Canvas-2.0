const express = require('express');
const router = express.Router();

const contrat_proController = require('../controllers/contrat_pro.controller');

// get all contrat_pro
router.get('/', contrat_proController.getContrat_proList);

//get contrat_pro by ID
router.get('/:id', contrat_proController.getContrat_proByID);

//create new contrat_pro
router.post('/', contrat_proController.createNewContrat_pro);

//update contrat_pro
router.put('/:id', contrat_proController.updateContrat_pro);

//delete contrat_pro
router.delete('/:id', contrat_proController.deleteContrat_pro);

module.exports = router;