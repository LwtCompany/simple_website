const express = require("express");
const route = express.Router();

const {
    getMenus,
    getMenu,
    addMenu,
    updateMenu,
    deleteMenu,
    
    

} = require("../controllers/Menus.controller")

route.get("/get", getMenus);
route.get("/:id", getMenu)


route.post("/", addMenu);

route.patch("/:id", updateMenu);

route.delete("/:id", deleteMenu);

module.exports = route;