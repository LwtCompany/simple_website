
class Errors{
    constructor(){
        this.errors = [];
    }

    setError(message, type){
        let errObj = {
            time: Date(),
            message,
            type
        }
        
        this.errors.push(errObj);
    }

    getErrors(){
        return this.errors;
    }
}

module.exports = new Errors();

