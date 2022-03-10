// require mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

// Construct Schema
const bookSchema = ({
    title: { type: String, required: true },
    description: String,
    year: Number,
    quantity:{ type: Number, required: true },
    imageURL: String
})

// Export model
const Book = mongoose.model('Book', bookSchema)
module.exports = Book