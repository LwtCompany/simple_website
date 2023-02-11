const modelCases = require("../models/Cases.model");

async function getCases(req, res) {
    try {
        const casesList = await modelCases.find();
        return res.status(200).json(casesList);
    } catch (error) {
        res.status(404).json({
            type: 'getCases',
            message: console.error
        })
    }
};

module.exports = {
    getCases
};