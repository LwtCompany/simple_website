const express = require("express");
const route = express.Router();

const {
    getCases_action
} = require("../controllers/Cases_action.controller");

route.get("/", getCases_action);

module.exports = route;