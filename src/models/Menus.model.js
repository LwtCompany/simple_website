const errorModel = require("./Errors.model");

class Menus{
    constructor(){
        this.menus = [];
    }

    setMenu(name){
        if(name && typeof name === 'string'){
            this.menus.push(name);
            return 1;
        }
        errorModel.setError("Berilgan data type noturi yoki mavjed emas", "Menus.model")
        return 0;
          
    }

    getMenus(){
        return this.menus;
    }
}

module.exports = new Menus();

