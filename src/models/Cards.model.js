const mongoose = require("mongoose");
const { Schema } = mongoose;

const cardsSchema = new Schema({
    img: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    text: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model("Cards", cardsSchema);
