const modelCases_action = require("../models/Cases_action.model");

async function getCases_action(req, res) {
    try {
        const cases_actionList = await modelCases_action.find();
        return res.status(200).json(cases_actionList);
    } catch (error) {
        res.status(404).json({
            type: "getCases_action",
            message: error
        });
    }
};

module.exports = {
    getCases_action
};