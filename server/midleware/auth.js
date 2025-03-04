const isLogIn = (req,res,next)=>{
    try {
        const token = req.header.Authorization?.split(' ')[1]
        if(!token){
            res.status(401).send('Invalid token')
        }
    } catch (error) {
        res.status(401).send({message:'Invalid token'})
    }
}