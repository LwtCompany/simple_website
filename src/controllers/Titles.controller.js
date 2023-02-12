const modelTitles = require('../models/Titles.model');


//get ALL TITLES

async function getTitles(req, res) {
    try {
        const titlesList = await modelTitles.find();

        return res.status(200).json(titlesList);
    } catch (error) {
        res.status(404).json({
            type: "getTitles",
            message: error
        })
    }
};

// get ONE TITLE

async function getTitle(req, res) {
    try {
        const title = await modelTitles.findOne({_id: req.params.id})
        res.status(200)
        res.send(title)
    } catch (error) {
        res.status.send({error: "Title doesn't exist! "})
    }
}

// Add TITLE

async function addTitle (req, res) {
        const title = new modelTitles({
        words: req.body.words
        })
        await title.save()
        res.send(title)
}

// Update Title

async function updateTitle (req, res) {
    try{
        const title = await modelTitles.findOne({_id: req.params.id})
        if(req.body.words) title.words = req.body.words
        await title.save()
        res.send(title)
    } catch {
        res.status(404).send({error: "Title doesn't exist!"})
    }
}

// Delete TITLE

async function deleteTitle(req, res) {
    try{
        await modelTitles.deleteOne({_id: req.params.id})
        res.status(204).send()
    } catch {
        res.status(404).send({error: "Title doesn't exist"})
    }
}
module.exports = {
    getTitles,
    getTitle,
    addTitle,
    updateTitle,
    deleteTitle
};