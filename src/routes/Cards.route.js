const express = require("express");
const route = express.Router();

const {
    getCards,
    getCard,
    addCard,
    updateCard,
    deleteCard,
    adminGetCards
} = require("../controllers/Cards.controller")

route.get("/", getCards);
route.get("/:id", getCard);
route.get("/card", adminGetCards)
route.post("/", addCard);
route.patch("/:id", updateCard);
route.delete("/:id", deleteCard);
module.exports = route;