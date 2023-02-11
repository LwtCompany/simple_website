const  express = require("express");
const route = express.Router();

const {
    getCases
} = require("../controllers/Cases.controller");

route.get("/", getCases);

module.exports = route;
