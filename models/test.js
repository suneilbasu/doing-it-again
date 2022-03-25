const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
})

const Test = mongoose.model('Test', testSchema)

module.exports = Test
