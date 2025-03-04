const bcrypt = require('bcryptjs')
const User = require("../models/users")
const jwt = require('jsonwebtoken')

const registerUser = async (req,res)=>{
    const {firstName,lastName,email,password} =  req.body;
    const user = await User.findOne({email})
    if(user){
        return res.status(400).send({message:'User already exists'})
    }
    const encryptedPassword = await bcrypt.hash(password,10)
    const newUser = await User.create({
        firstName,
        lastName,
        email,
        password:encryptedPassword
    })
    return res.status(201).send({data:newUser,success:true})
}

const logInUser = async (req,res)=>{
    const {email,password}= req.body;
    const user = await User.findOne({email})
    if(!user){
        return res.status(401).send({message:"Invalid Credentials",success:false})
    }
    const matchPassword = await bcrypt.compare(password,user.password)
    if(!matchPassword){
        return res.status(401).send({message:"Wrong Password",success:false})
    }
    const token = jwt.sign(user.email,process.env.SECRET_KEY)
    return res.status(200).send({message:'User logged in successfully',success:true,jwt:token})
}

module.exports = {registerUser,logInUser}
