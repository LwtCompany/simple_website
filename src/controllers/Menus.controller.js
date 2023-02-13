const modelMenus = require("../models/Menus.model");

//get ALL MENUS

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


//get ONE MENE 

async function getMenu (req, res) {
try {
    const menusList = await modelMenus.findOne({_id: req.params.id})
    return res.send(menusList)
} catch {
    res.status(404).send({error: "Menu isn't defined!"})
}
}

//Add MENU

async function addMenu (req, res) {
    try {
        const menu = new modelMenus({
            menu: req.body.menu
        })
        await menu.save()
        res.status(200).json(menu)
    } catch (error) {
        res.status(404).json(error)
    }
}


// Update MENU
async function updateMenu(req, res) {
    try {
        const menuFound = await modelMenus.findOne({_id: req.params.id})
        console.log(menuFound)
        if(req.body.menu) menuFound.menu = req.body.menu;
        return res.status(200).json(menuFound)
    } catch{
        res.status(404).send({error:"Menu doesn't exist!"})
    }
        
}

// DELETE MENU

async function deleteMenu (req, res) {
   
   try{
        await modelMenus.deleteOne({_id: req.params.id})
        res.status(204).send({})
      } catch {
        res.status(404).send({error: "Menu isn't defined!"})
      }
    } 

module.exports = {
    getMenus,
    getMenu,
    addMenu,
    updateMenu,
    deleteMenu
};