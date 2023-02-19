const express = require("express");
const route = express.Router();

const {
    siteSendData,
    aboutSendData,
    actionSendData,
    newsSendData,
    doctoresSendData,
    contactSendData
} = require("../controllers/index.controller")

route.get("/index", siteSendData);
route.get("/covido",siteSendData )
route.get("/about", aboutSendData);
route.get("/action", actionSendData);
route.get("/news", newsSendData);
route.get("/doctores", doctoresSendData);
route.get("/contact", contactSendData);

module.exports = route;