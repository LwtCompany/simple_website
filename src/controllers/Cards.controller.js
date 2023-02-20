const modelCard = require("../models/Cards.model");

// get all cards

async function getCards(req, res) {
    try {
        const cardsList = await modelCard.find();
        return res.status(200).json(cardsList)
    } catch (error) {
        res.status(404).json({
            type: getCards,
            message: error
        })
    }
};

//GET one CARD

async function getCard (req, res) {
    try {
        const card = await modelCard.findOne({_id: req.params.id });
        res.send(card);
    } catch (error) {
        res.status(404)
        res.send({error: "Card doesn't exist!"})
    }
};

//ADD CARD

async function addCard(req, res) {
    const card = new modelCard({
        img: req.body.img,
        title: req.body.title,
        text: req.body.text
    })
    await card.save()
    res.send(card)
};


//Update CARD

async function updateCard(req, res) {
    try {
        const card = await modelCard.findOne({_id: req.params.id})
        if (req.body.img) card.img = req.body.img;
        if (req.body.title) card.title = req.body.title;
        if (req.body.text) card.text = req.body.text;
        await card.save()
        res.send(card)
    } catch {
        res.status(404)
        res.send({error: "Card doesn't exist!"})
    }
} 

// DELETE CARD
async function deleteCard (req, res) {
    try {
        await modelCard.deleteOne({_id: req.params.id})
        res.status(204).send("DELETED")
    } catch {
        res.status(404)
        res.send({error: "Card doesn't exist!"})
    }
}


// Admin getCards

async function adminGetCards (req, res) {
    const cards_data = await modelCard.find({});
    res.render("admin/card", {cards_data});
}
module.exports = {
    getCards,
    getCard,
    addCard,
    updateCard,
    deleteCard,
    adminGetCards
};
