const bcrypt = require('bcryptjs')
const User = require("../models/users")
const jwt = require('jsonwebtoken')

const registerUser = async (req,res)=>{
    const {firstName,lastName,email,password} =  req.body;
    if(!firstName && !lastName && !email && !password){
        return res.status(400).json({message:'All fields are required'})
    }
    const user = await User.findOne({email})
    if(user){
        return res.status(400).json({message:'User already exists'})
    }
    const encryptedPassword = await bcrypt.hash(password,10)
    const newUser = await User.create({
        firstName,
        lastName,
        email,
        password:encryptedPassword
    })
    return res.status(201).json({message:'User created',data:newUser,success:true})
}

const logInUser = async (req,res)=>{
    const {email,password}= req.body;
    if(!email && !password){
        return res.status(400).json({message:'All fields are required'})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(401).json({message:"Invalid Credentials",success:false})
    }
    const matchPassword = await bcrypt.compare(password,user.password)
    if(!matchPassword){
        return res.status(401).json({message:"Invalid Credentials",success:false})
    }
    const token = jwt.sign(user.email,process.env.SECRET_KEY)
    return res.status(200).json({message:'User logged in successfully',success:true,jwt:token})
}

module.exports = {registerUser,logInUser}
