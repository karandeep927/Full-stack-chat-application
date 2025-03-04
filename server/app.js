const express = require('express')
const authRoutes = require("./routes/authRoutes")
const cookieParser = require('cookie-parser')
const chatRoute = require('./controllers/chatController')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieParser())
app.use('/api/auth',authRoutes)
app.use('/api/chat',chatRoute)

module.exports = app

