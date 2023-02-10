const express = require("express");
const router = express.Router();
const blogRoute = require("./Blog.route")
const menusRoute = require("./Menus.route");

router.use("/blogs", blogRoute)
router.use("/Menus", menusRoute)


router.get("*", (req, res) => {
  res.render('pages/error', {MENUS});
})

module.exports = router;