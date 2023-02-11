const modelTitles = require('../models/Titles.model');

async function getTitles(req, res) {
    try {
        const titlesList = await modelTitles.find();

        return res.status(200).json(titlesList);
    } catch (error) {
        res.status(404).json({
            type: "getTitles",
            message: error
        })
    }
};

module.exports = {
    getTitles
};