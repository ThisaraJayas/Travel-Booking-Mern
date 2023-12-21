const User = require('../models/User.js')


//create new User
const createUser = async (req, res) => {
    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()

        res.status(200).json({
            success: true, message: 'Successfull created',
            data: savedUser
        })
    } catch (err) {
        res.status(500).json({ success: false, message: 'failed created' })
    }
}

//update User
const updateUser = async (req, res) => {

    const id = req.params.id
    try {
        const updateUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({
            success: true, message: 'Successfull updated',
            data: updateUser
        })
    } catch (err) {
        res.status(500).json({
            success: false, message: 'update failed',
        })
    }
}
//delete User
const deleteUser = async (req, res) => {

    const id = req.params.id
    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: 'Successfull deleted' })
    } catch (err) {
        res.status(500).json({
            success: false, message: 'delete failed',
        })
    }
}
//getSingle User
const getSingleUser = async (req, res) => {

    const id = req.params.id
    try {
        const user = await User.findById(id)
        res.status(200).json({ success: true, message: 'Successfull found', data: user })
    } catch (err) {
        res.status(404).json({
            success: false, message: 'not found',
        })
    }
}
//getAll User
const getAllUser = async (req, res) => {

    try {
        const users = await User.find({})

        res.status(200).json({ success: true,  message: 'Successfull', data: users })
    } catch (err) {
        res.status(404).json({
            success: false, message: 'not found',
        })
    }
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getSingleUser,
    getAllUser,
};

