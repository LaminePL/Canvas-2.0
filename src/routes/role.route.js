const express = require('express');
const router = express.Router();

const roleController = require('../controllers/role.controller');

// get all role
router.get('/', roleController.getRoleList);

//get role by ID
router.get('/:id', roleController.getRoleByID);

//create new role
router.post('/', roleController.createNewRole);

//update role
router.put('/:id', roleController.updateRole);

//delete role
router.delete('/:id', roleController.deleteRole);

module.exports = router;