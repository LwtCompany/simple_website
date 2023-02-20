const modelMenus = require("../models/Menus.model");
const modelTitles = require("../models/Titles.model");
const modelCards = require("../models/Cards.model")
const modelCases = require("../models/Cases.model");
const modelDoctors = require("../models/Doctors.model");
const modelCases_actions = require("../models/Cases_action.model")

//index for
async function siteSendData (req, res) {
    const MENUS = await modelMenus.find({});
    const TITLES = await modelTitles.find({});
    const CARDS = await modelCards.find({});
    const CASES = await modelCases.find({});
    const DOCTORS = await modelDoctors.find({});
    const CASES_ACTIONS = await modelCases_actions.find({});
    res.render("./pages/index", {MENUS, active: 0, TITLES, CARDS, CASES, DOCTORS, CASES_ACTIONS})
}

//about for
async function aboutSendData (req, res) {
    const MENUS = await modelMenus.find({});
    res.render("./pages/about", {MENUS, active: 1 })
}

// ACTION for
async function actionSendData(req, res) {
    const MENUS = await modelMenus.find({});
    const CASES_ACTION = await modelCases_actions.find({});
    res.render("./pages/action", {CASES_ACTION, MENUS, active: 2});
}

// NEWS for
async function newsSendData (req, res) {
    const MENUS = await modelMenus.find({});
    res.render("pages/news", {MENUS, active: 4})
}

// DOCTORES for 
async function doctoresSendData (req, res) {
    const MENUS = await modelMenus.find({});
    res.render("pages/doctores", {MENUS, active: 5})
}

// CONTACT for
async function contactSendData (req, res) {
    const MENUS = await modelMenus.find({});
    res.render("pages/contact", {MENUS, active: 6})
}
module.exports = {
    siteSendData,
    aboutSendData,
    actionSendData,
    newsSendData,
    doctoresSendData,
    contactSendData
}