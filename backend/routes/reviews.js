const express = require('express');
const { createReview } = require('../controllers/reviewController.js');
const router = express.Router();
const {verifyUser} = require('../utils/verifyToken.js')

router.post('/:tourId',verifyUser, createReview)

module.exports=router