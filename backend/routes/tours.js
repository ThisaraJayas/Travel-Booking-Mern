
const express = require('express');
const router = express.Router();

const { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCount } = require('../controllers/tourController');

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

//get tour by search
router.get('/search/getTourBySearch', getTourBySearch)

//get featured tour
router.get('/search/getFeaturedTour', getFeaturedTour)

//tour count
router.get('/search/getTourCount', getTourCount)


module.exports=router