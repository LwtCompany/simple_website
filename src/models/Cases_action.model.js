const mongoose = require("mongoose");
const { Schema } = mongoose;

const cases_actionSchema = new Schema({
    case: {
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

module.exports = mongoose.model("Cases_action", cases_actionSchema);

