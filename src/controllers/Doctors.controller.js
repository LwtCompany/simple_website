const { model } = require("mongoose");
const modelDoctors = require("../models/Doctors.model");

// get all Doctors
async function getDoctors(req, res) {
    const doctorsList = await modelDoctors.find();
    res.send(doctorsList);
};

//get One Doctor

async function getDoctor (req, res) {
    try {
        const doctor = await modelDoctors.findOne({_id:req.params.id})
        res.send(doctor)
    } catch {
        res.status(202)
        res.send({error: "Doctor doesn't exist!"})
    }
}

// addDoctor

async function addDoctor (req, res) {
    const doctor = new modelDoctors({
        name: req.body.name,
        text: req.body.text,
        img: req.body.img
    })
    await doctor.save()
    res.send(doctor)
}

// update doctor

async function updateDoctor (req, res) {
    try {
        const doctor = await modelDoctors.findOne({_id: req.params.id})
        if(req.body.name) doctor.name = req.body.name;
        if(req.body.text) doctor.text = req.body.text;
        if(req.body.img) doctor.img = req.body.img;
        await doctor.save()
        res.send(doctor)
    } catch {
        res.status(404)
        res.send({error: "Doctor doesn't exist!"})
    }
}

// delete Doctor

async function deleteDoctor (req, res) {
    try {
        const doctor = await modelDoctors.deleteOne({_id: req.params.id})
        res.status(204)
        res.send("DELETED!")
    } catch {
        res.status(404)
        res.send({ error: "Doctor doesn't exist!"})
    }
}

async function adminGetDoctors (req, res) {
    const doctorsList  = await modelDoctors.find({});
    res.render("admin/doctors", {doctorsList})
}

module.exports = {
    getDoctors,
    getDoctor,
    addDoctor,
    updateDoctor,
    deleteDoctor,
    adminGetDoctors
};