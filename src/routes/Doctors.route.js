const express = require("express");
const route = express.Router();

const {
    getDoctors,
    getDoctor,
    addDoctor,
    updateDoctor,
    deleteDoctor
} = require("../controllers/Doctors.controller");

route.get("/", getDoctors);
route.get("/:id", getDoctor);

route.post("/", addDoctor);

route.patch("/:id", updateDoctor);

route.delete("/:id", deleteDoctor);

module.exports = route;