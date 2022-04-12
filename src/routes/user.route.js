const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

// get all users
router.get('/', userController.getUserList);

//get user by ID
router.get('/:id_user', userController.getUserByID);

//create new user
router.post('/', userController.createNewUser);

//update user
router.put('/:id_user', userController.updateUser);

//delete user
router.delete('/:id_user', userController.deleteUser);

module.exports = router;