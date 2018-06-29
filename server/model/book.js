const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type:String,
        required: true
    },
    publisher: String,
    publicationDate: Date,
    pages: String,
    imageURL: String,
    buyURL: String
})

module.exports = mongoose.model('Book', bookSchema)
