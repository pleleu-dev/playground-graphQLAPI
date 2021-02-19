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
        try {
            const ret = sessions.filter(el=> el.id == id)
            return ret[0];
        } catch (error) {
            return {
                code : "ERROR", message : "erororo", token : "sdbqsd"
            }
        }

    }
    toggleFavoriteSession(id){
        const ret = sessions.filter(el=> el.id == id)
        ret[0].favorite = !ret[0].favorite;
        return ret[0];
    }

    addNewSession(session){
        session.id = 12
        sessions.push(session)
        return session;
    }
}


module.exports = SessionAPI
