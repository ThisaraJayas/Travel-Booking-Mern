
const Tour = require('../models/Tour.js')

//create new tour

const createTour = async (req, res) => {
    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()

        res.status(200).json({
            success: true, message: 'Successfull created',
            data: savedTour
        })
    } catch (err) {
        res.status(500).json({ success: false, message: 'failed created' })
    }
}

//update tour
const updateTour = async (req, res) => {

    const id = req.params.id
    try {
        const updateTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({
            success: true, message: 'Successfull updated',
            data: updateTour
        })
    } catch (err) {
        res.status(500).json({
            success: false, message: 'update failed',
        })
    }
}
//delete tour
const deleteTour = async (req, res) => {

    const id = req.params.id
    try {
        await Tour.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: 'Successfull deleted' })
    } catch (err) {
        res.status(500).json({
            success: false, message: 'delete failed',
        })
    }
}
//getSingle tour
const getSingleTour = async (req, res) => {

    const id = req.params.id
    try {
        const tour = await Tour.findById(id).populate('reviews')
        res.status(200).json({ success: true, message: 'Successfull found', data: tour })
    } catch (err) {
        res.status(404).json({
            success: false, message: 'not found',
        })
    }
}
//getAll tour
const getAllTour = async (req, res) => {

    //for pagination
    const page = parseInt(req.query.page)

    try {
        const tours = await Tour.find({}).populate('reviews')
        .skip(page * 8).limit(8)

        res.status(200).json({ success: true, count: tours.length, message: 'Successfull', data: tours })
    } catch (err) {
        res.status(404).json({
            success: false, message: 'not found',
        })
    }
}





//get tour by search=====================================

const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i')  //here 'i' means case sensitive
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    console.log('City:', city);
    console.log('Distance:', distance);
    console.log('Max Group Size:', maxGroupSize);

    try {
        //gte means greater than equal
        const tours = await Tour.find({
            city, distance: { $gte: distance },
            maxGroupSize: { $gte: maxGroupSize }
        }).populate('reviews')
        res.status(200).json({
            success: true,
            message: 'Successfull',
            data: tours
        })
    } catch (err) {
        res.status(404).json({
            success: false, message: 'not found',
        })
    }
}

//get featured tour
const getFeaturedTour = async (req, res) => {

    try {
        const tours = await Tour.find({featured:true})
        .populate('reviews')
        .limit(8)

        res.status(200).json({
            success: true, 
            message: 'Successfull', 
            data: tours 
        })
    } catch (err) {
        res.status(404).json({
            success: false, message: 'not found',
        })
    }
}
//get tour counts=======================
const getTourCount = async (req, res) => {

    try {
        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({
            success: true, 
            data: tourCount 
        })
    } catch (err) {
        res.status(404).json({
            success: false, message: 'failed to fetch',
        })
    }
}

module.exports = {
    createTour,
    updateTour,
    deleteTour,
    getSingleTour,
    getAllTour,
    getTourBySearch,
    getFeaturedTour,
    getTourCount,
};