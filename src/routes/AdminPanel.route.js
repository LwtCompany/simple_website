const express = require("express");
const route = express.Router();

const {
   adminGetMenus
} = require("../controllers/Menus.controller")

const {
  adminGetCards
} = require("../controllers/Cards.controller")

const {
    AdminGetCases_action
  } = require("../controllers/Cases_action.controller")

  const {
    adminGetCases
  } = require("../controllers/Cases.controller");

const { adminGetDoctors } = require("../controllers/Doctors.controller");

const { adminGetTitles } = require("../controllers/Titles.controller");


route.get("/", (req, res) => {
    res.render("admin/index");
  })
  

  
  route.get("/doctor", adminGetDoctors)
 
  route.get("/menu", adminGetMenus);

  route.get("/card", adminGetCards);
  
  route.get("/cases_action", AdminGetCases_action);

  route.get("/case", adminGetCases);

  route.get("/title", adminGetTitles);

  module.exports = route;