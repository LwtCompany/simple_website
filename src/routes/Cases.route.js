const  express = require("express");
const route = express.Router();

const {
    getCases,
    getCase,
    addCase,
    updateCase,
    deleteCase
} = require("../controllers/Cases.controller");

route.get("/", getCases);
route.get("/:id", getCase);

route.post("/", addCase);

route.patch("/:id", updateCase);

route.delete("/:id", deleteCase);


module.exports = route;
