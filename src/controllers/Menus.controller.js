const modelMenus = require("../models/Menus.model");


async function getMenus(req, res) {
    try {
        const menusList = await modelMenus.find();

        return res.status(200).json(menusList);
    } catch (error) {
        res.status(404).json({
            type: "getMenus",
            message: error
        })
    }
}

module.exports = {
    getMenus
}