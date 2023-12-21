
const express = require('express');
const router = express.Router();

const { createTour, updateTour, deleteTour, getSingleTour, getAllTour } = require('../controllers/tourController');

//create new tour
router.post('/',createTour)

//update new tour
router.put('/:id',updateTour)

//delete new tour
router.delete('/:id',deleteTour)

//get single tour
router.get('/:id',getSingleTour)

//get all tour
router.get('/',getAllTour)



module.exports=router