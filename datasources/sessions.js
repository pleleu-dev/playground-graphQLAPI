const sessions = require('../data/sessions.json')
const { DataSource} =  require('apollo-datasource');

class SessionAPI extends DataSource{
    constructor(){
        super()
    }

    initialize(config){

    }

    getSessions(args){
        const argsKeys = Object.keys(args);
        let ret = [...sessions];
        argsKeys.forEach(k =>{
            ret = ret.filter(el => args[k] == el[k])
        })
        return ret
    }
    getSessionById(id){
        const ret = sessions.filter(el=> el.id == id)
        return ret[0];
    }
}


module.exports = SessionAPI
