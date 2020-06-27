const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')  //requiring the dotenv package
const { postRoute } = require('./routes/posts')
const cors = require('cors') //it helps to run the rest api's

const PORT = process.env.PORT || 1234

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/posts', postRoute)

app.get('/', (req, res) => {
    res.send("We are at home")
})

//connect to db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true, useUnifiedTopology: true  } , () => {
    console.log("we are connected to db")
})

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`)
})