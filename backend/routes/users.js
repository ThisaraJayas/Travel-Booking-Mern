const express = require('express');
const { createUser, updateUser, deleteUser, getSingleUser, getAllUser } = require('../controllers/userController');
const router = express.Router();
const {verifyUser, verifyAdmin} = require('../utils/verifyToken.js')

//create new user
router.post('/',createUser)

//update new user
router.put('/:id', verifyUser,updateUser)

//delete new user
router.delete('/:id', verifyUser,deleteUser)

//get single user
router.get('/:id', verifyUser,getSingleUser)

//get all user
router.get('/', verifyAdmin,getAllUser)

module.exports=router