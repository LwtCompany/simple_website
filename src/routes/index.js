const express = require("express");
const { getTitles } = require("../controllers/Titles.controller");
const router = express.Router();
const blogRoute = require("./Blog.route");
const menusRoute = require("./Menus.route");
const titlesRoute = require("./Titles.route");
const cardsRoute = require("./Cards.route");
const casesRoute = require("./Cases.route");
const doctorsRoute = require("./Doctors.route");
const cases_actionRoute = require("./Cases_action.route");

router.use("/blogs", blogRoute);
router.use("/Menus", menusRoute);
router.use("/Titles", titlesRoute);
router.use("/Cards", cardsRoute);
router.use("/Cases", casesRoute);
router.use("/Doctors", doctorsRoute);
router.use("/Cases_actions", cases_actionRoute);


router.get("/", (req, res) => {
  res.render("admin/index");
})
router.get("/card", (req, res) => {
  res.render("admin/card");
})

const modelMenus = require("../models/Menus.model");
router.get("/menu", async (req, res) => {
  const menus_data = await modelMenus.find({});
  res.render("admin/menu", {menus_data});
})

router.get("*", (req, res) => {
  res.render('pages/error');
})

module.exports = router;