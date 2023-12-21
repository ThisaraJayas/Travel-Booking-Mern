const User = require('../models/User.js')
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')


//user registration
const register = async (req, res) => {
    try{

        //hashing password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo,
        })
        await newUser.save()
        res.status(200).json({success:true, message:'Succussfully Created'})
    }catch(err){
        res.status(500).json({success:false, message:'Failed to Create'})
    }
}

//user login
const login = async (req, res) => {

    const email = req.body.email

    try{
        const user = await User.findOne({email})

        //if user doesnt exit
        if(!user){
            return res.status(404).json({success:false, message:'User not found'})
        }

        //if user exit check password or compare the password
        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

        //if password is incorrect
        if(!checkCorrectPassword){
            return res.status(401).json({success:false, message:'Incorrect password or Email'})
        }

        const {password, role, ...rest}=user._doc

        //create JWT token
        const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY,{
            expiresIn:"15d"
        })

        //set token in the browser cookies and the response to the client
        res.cookie('accessToken',token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({token ,data:{...rest},role})
    }catch(err){
        res.status(500).json({success:false, message:'Failed to login'})
    }
}

module.exports = {
    register,
    login,
};