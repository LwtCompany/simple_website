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
  } = require("../controllers/Cases.controller")



route.get("/", (req, res) => {
    res.render("admin/index");
  })
  

  
  route.get("/title", (req, res) => {
    res.render("admin/titles")
  })
  
  route.get("/doctor", (req, res) => {
    res.render("admin/doctors")
  })
  route.get("/doctor", (req, res) => {
    res.render("admin/doctors")
  })
 
  route.get("/menu", adminGetMenus);

  route.get("/card", adminGetCards);
  
  route.get("/cases_action", AdminGetCases_action);

  route.get("/case", adminGetCases)

  module.exports = route;