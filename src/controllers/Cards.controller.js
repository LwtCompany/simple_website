const modelCard = require("../models/Cards.model");

async function getCards(req, res) {
    try {
        const cardsList = await modelCard.find();
        console.log(cardsList)
        return res.status(200).json(cardsList)
    } catch (error) {
        res.status(404).json({
            type: getCards,
            message: error
        })
    }
};

async function getCard (req, res) {
    try {
        const card = await modelCard.findOne({_id: req.params.id });
        res.send(card);
    } catch (error) {
        res.status(404)
        res.send({error: "Card doesn't exist!"})
    }
};

async function addCard(req, res) {
    const card = new modelCard({
        img: req.body.img,
        title: req.body.title,
        text: req.body.text
    })
    await card.save()
    res.send(card)
};


module.exports = {
    getCards,
    getCard,
    addCard
};
