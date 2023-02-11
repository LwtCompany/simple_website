const express = require("express");
const route = express.Router();

const {
    getDoctors
} = require("../controllers/Doctors.controller");

route.get("/", getDoctors);

module.exports = route;