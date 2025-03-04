const {Router} = require('express')
const Chat = require('../models/chatModel')


const router = Router()
router.post('/create-new-chat',async(req,res)=>{
    try {
        const chat = new Chat(req.body);
        const savedChat = await chat.save();
        res.status(201).send({message:"Chat created successfully",success:true,data:savedChat})
    } catch (error) {
        res.status(400).send({message:error.message,success:false})
    }
})


module.exports = router