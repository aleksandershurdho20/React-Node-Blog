const jwt = require('jsonwebtoken');
const bcryps = require('bcrypt');
const User = require('../schemas/user')


exports.signup = async (req,res) => {

    const {email,password}=req.body
    try{
        const newUser = await User.create({
            email,password
        })
    } catch (err){
        res.status(401).json(err.message)
    }
    console.log('sign up hitted')
}