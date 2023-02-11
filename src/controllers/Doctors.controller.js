const modelDoctors = require("../models/Doctors.model");

async function getDoctors(req, res) {
    try {
        const doctorsList = await modelDoctors.find();
        return res.status(200).json(doctorsList);
    } catch (error) {
        res.status(404).json({
            type: "getDoctors",
            message: error
        })
    }
};

module.exports = {
    getDoctors
};