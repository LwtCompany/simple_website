const  mongoose = require ('mongoose');
const { Schema } = mongoose;


const menusSchema = new Schema({
    name: {
        required: true,
        type: String
    }
});

module.exports = mongoose.model("Menus", menusSchema)