const express = require("express");
const route = express.Router();

const {
    getCards,
    getCard,
    addCard
} = require("../controllers/Cards.controller")

route.get("/", getCards);
route.get("/:id", getCard);
route.post("/", addCard);
module.exports = route;