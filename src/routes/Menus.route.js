const express = require("express");
const route = express.Router();

const {
    getMenus
} = require("../controllers/Menus.controller")

route.get("/", getMenus);


module.exports = route;