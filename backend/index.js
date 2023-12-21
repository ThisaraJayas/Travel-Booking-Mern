const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 8000
const corsOptions ={
    origin:true,
    credentials:true
}

app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())


//database connection
const URL = process.env.MONGODB_URL
mongoose.connect(URL, {})
    const connection = mongoose.connection
    connection.once("open", () => {
        console.log('connection success!');
})
const tourRoute = require('./routes/tours.js')
app.use("/api/v1/tours", tourRoute)

const userRoute = require('./routes/users.js')
app.use("/api/v1/users", userRoute)

const authRoute = require('./routes/auth.js')
app.use('/api/v1/auth',authRoute)

app.listen(port, () => {
    console.log('server listening on port', port);
})