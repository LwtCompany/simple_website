const express = require('express');
const route = express.Router();

const {
    getTitles,
    getTitle,
    addTitle,
    updateTitle,
    deleteTitle
} = require("../controllers/Titles.controller");

route.get("/", getTitles);
route.get("/:id", getTitle);

route.post("/", addTitle);

route.patch("/:id", updateTitle);

route.delete("/:id", deleteTitle);

module.exports = route;