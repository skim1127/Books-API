// Require needed modules
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Config
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('Connected to Mongo:', process.env.MONGO_URI) }
)

// CORS CONFIG
app.use(cors())

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})
   
app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})

// configure body parser???
app.use(express.json())

// Get homepage
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!')
})

// Books Controller
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

// Listen
app.listen(PORT, console.log("Listening on port:", PORT))
