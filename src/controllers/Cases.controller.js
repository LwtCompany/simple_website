const modelCases = require("../models/Cases.model");

// get all case

async function getCases (req, res) {
        const casesList = await modelCases.find();
        res.send(casesList)
};

// get one getCase
async function getCase (req, res) {
    try{
        const caseOne = await modelCases.findOne({_id: req.params.id})
        res.send(caseOne);
    } catch {
        res.status(404)
        res.send({error: "Case doesn't exist!"})
    }
}

// add case

async function addCase (req, res) {
    const caseAdd = new modelCases({
        case: req.body.case,
        text: req.body.text,
        img: req.body.img
    })
    await caseAdd.save()
    res.send(caseAdd)
}

// update CASE

async function updateCase (req, res) {
    try {
        const caseOne = await modelCases.findOne({_id: req.params.id})
        if(req.body.case) caseOne.case = req.body.case;
        if(req.body.text) caseOne.text = req.body.text;
        if(req.body.img) caseOne.img = req.body.img;
        await caseOne.save()
        res.send(caseOne)
    } catch {
        res.status(404)
        res.send({error: "Case doesn't exist!"})
    }
} 

// delete case

async function deleteCase (req, res) {
    try {
        const deleteCase = await modelCases.deleteOne({_id: req.params.id})
        res.status(204).send();
    } catch {
        res.status(404)
        res.send({error: "Case doesn't exist!"})
    }
}

// Admin cases

async function adminGetCases (req, res) {
    const cases_data = await modelCases.find({});
    res.render("admin/cases", {cases_data})
}

module.exports = {
    getCases,
    getCase,
    addCase,
    updateCase,
    deleteCase,
    adminGetCases
};