const express = require("express");
const route = express.Router();

const {
    getCards,
    getCard,
    addCard,
    updateCard,
    deleteCard
} = require("../controllers/Cards.controller")

route.get("/", getCards);
route.get("/:id", getCard);
route.post("/", addCard);
route.patch("/:id", updateCard);
route.delete("/:id", deleteCard);
module.exports = route;