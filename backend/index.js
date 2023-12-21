const cookieParser = require('cookie-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 8000


app.use(express.json())
app.use(cors())
app.use(cookieParser())

//database connection
const URL = process.env.MONGODB_URL
mongoose.connect(URL, {})
    const connection = mongoose.connection
    connection.once("open", () => {
        console.log('connection success!');
})
const tourRoute = require('./routes/tours.js')
app.use("/tours", tourRoute)

const userRoute = require('./routes/users.js')
app.use("/users", userRoute)

const authRoute = require('./routes/auth.js')
app.use('/users',authRoute)

app.listen(port, () => {
    console.log('server listening on port', port);
})