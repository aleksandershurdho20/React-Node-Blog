const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../schemas/user')
 const JWT_SECRET = process.env.JWT_SECRET
 const JWT_EXPIRES = process.env.JWT_EXPIRES

const signJwt = (id ) => {
    return jwt.sign({id},JWT_SECRET,{
        expiresIn:JWT_EXPIRES
    })
}
//Send Token to User

const sendToken = (user,statusCode , req , res) => {
    const  token = signJwt(user._id)
    res.cookie('jwt',token, {
        expires:new Date(Date.now()+ JWT_EXPIRES),
        secure:true,
        httpOnly:true,
    });
    user.password = undefined;
    res.status(statusCode).json({
        status:'success',
        token,
        user,
    })
}



//Hash passwords
const encryptPsw = async  (password) => {
    //How heavy u need to hash pass word (12)
return await bcrypt.hash(password,12)
}

exports.signup = async (req,res) => {

    const {email,password} = req.body
    const pw = await encryptPsw(password)
    try{
        const newUser = await User.create({
            email,password:pw
        });
        sendToken(newUser , 201,req,res)
    } catch (err){
        res.status(401).json(err.message)
    }
    console.log('sign up hitted')
}

exports.login = async (req,res)=>{
    const {email,password} = req.body

    console.log('Sign in ')
    try{
        const user = await User.findOne({email}).select("+password")

        //Compare Passwords the value is going to be true or false
       
        await bcrypt.compare(password, user.password)
        sendToken(user,200,req,res);
    }
    catch (err){
        console.log(err)
        res.status(400).json(err.message)
    }
}   