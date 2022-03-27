const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

// get all users
router.get('/', userController.getUserList);

//get user by ID
router.get('/:id_user', userController.getUserByID);

//create new user
router.post('/', userController.createNewUser);

module.exports = router;