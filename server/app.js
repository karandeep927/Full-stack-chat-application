const express = require('express')
const authRoutes = require("./routes/authRoutes")
const cookieParser = require('cookie-parser')
const chatRoute = require('./controllers/chatController')
const cors = require('cors')
const app = express()
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/chat',chatRoute)

module.exports = app

