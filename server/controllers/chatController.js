const {Router} = require('express')
const Chat = require('../models/chatModel')


const router = Router()
router.post('/create-new-chat',async(req,res)=>{
    try {
        const chat = new Chat(req.body);
        const savedChat = await chat.save();
        res.status(201).json({message:"Chat created successfully",success:true,data:savedChat})
    } catch (error) {
        res.status(400).json({message:error.message,success:false})
    }
})


module.exports = router