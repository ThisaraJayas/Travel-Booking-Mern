const express = require('express');
const { createUser, updateUser, deleteUser, getSingleUser, getAllUser } = require('../controllers/userController');
const router = express.Router();

//create new user
router.post('/',createUser)

//update new user
router.put('/:id',updateUser)

//delete new user
router.delete('/:id',deleteUser)

//get single user
router.get('/:id',getSingleUser)

//get all user
router.get('/',getAllUser)

module.exports=router