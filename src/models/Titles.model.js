const mongoose = require('mongoose');
const { Schema } = mongoose;

const titleSchema = new Schema({
    words: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Titles', titleSchema);