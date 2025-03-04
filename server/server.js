require("dotenv").config()
const app = require("./app");
const db = require('./connection')

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log('server is running on PORT:' + port)
})