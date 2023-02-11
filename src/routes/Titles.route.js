const express = require('express');
const route = express.Router();

const {
    getTitles
} = require("../controllers/Titles.controller");

route.get("/", getTitles);

module.exports = route;