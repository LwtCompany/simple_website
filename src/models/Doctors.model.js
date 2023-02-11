const mongoose = require("mongoose");
const { Schema } = mongoose;

const doctorsSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    text: {
        required: true,
        type: String
    },
    img: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model('Doctors', doctorsSchema);
