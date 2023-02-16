const modelCases_action = require("../models/Cases_action.model");


//get all cases_action
async function getCases_actions(req, res) {
        const cases_actionList = await modelCases_action.find();
        res.send(cases_actionList)
    } 
    


//get one cases_action

async function getCases_action (req, res) {
    try{
    const cases_action = await modelCases_action.findOne({_id:req.params.id})
    res.send(cases_action)
    } catch{
        res.status(404)
        res.send({error: "Cases_action doesn't exist!"})
    }
}

// add Cases_action

async function addCases_action (req, res) {
    const cases_action = new modelCases_action ({
        case: req.body.case,
        text: req.body.text,
        img: req.body.img
    })
    await cases_action.save()
    res.send(cases_action)
}

// update Cases_action

async function updateCases_action (req, res) {
    try{
        const cases_action = await modelCases_action.findOne({_id: req.params.id})
        if(req.body.case) cases_action.case = req.body.case;
        if(req.body.text) cases_action.text = req.body.text;
        if(req.body.img) cases_action.img = req.body.img;
        await cases_action.save()
        res.send(cases_action)
    } catch {
        res.status(404)
        res.send({error: "Cases_action doesn't exist"})
    }
}

//delete cases_action

async function deleteCases_action (req, res) {
    try{
        const cases_action = await modelCases_action.deleteOne({_id:req.params.id})
        res.status(204).send("deleted!")
    } catch {
        res.status(404) 
        res.send({error: "Cases_action doesn't!"})
    }
}

// Admin cases_action

async function AdminGetCases_action (req, res) {
    const cases_action_data = await modelCases_action.find({});
   res.render("admin/cases_action", {cases_action_data});
 }


module.exports = {
    getCases_actions,
    getCases_action,
    addCases_action,
    updateCases_action,
    deleteCases_action,
    AdminGetCases_action
};