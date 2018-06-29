const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    body: String,
    userName: String,
    userId: String,
    bookId: String,
    bookTitle: String
})

module.exports = mongoose.model('Comment', commentSchema)