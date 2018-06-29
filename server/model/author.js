const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    }
})

module.exports = mongoose.model('Author', authorSchema)