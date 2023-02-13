const express = require("express");
const route = express.Router();

const {
    getCases_actions,
    getCases_action,
    addCases_action,
    updateCases_action,
    deleteCases_action
} = require("../controllers/Cases_action.controller");

route.get("/", getCases_actions);
route.get("/:id", getCases_action);

route.post("/", addCases_action);

route.patch("/:id", updateCases_action);

route.delete("/:id", deleteCases_action);

module.exports = route;