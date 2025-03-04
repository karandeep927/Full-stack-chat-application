const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_STRING)
const db = mongoose.connection;
db.on('connected',()=>{
    console.log('db connected')
})
db.on('err',()=>{
    console.log('DB not connected ')
})
module.exports = db
