const { RESTDataSource} =  require('apollo-datasource-rest');

class SpeakerAPI extends RESTDataSource{
    constructor(){
        super()
        this.baseURL = 'http://localhost:3000/speakers'

    }

    async getSpeakers(args){
        const data = await this.get('/')
        console.log(args, data)
        if(!args) return data;

        const argsKeys = Object.keys(args);
        let ret = [...data];
        argsKeys.forEach(k =>{
            ret = ret.filter(el => args[k] == el[k])
        })
        return ret
    }
    async getSpeakerById(id){
        const data = await this.get(`/${id}`)
        return data;
    }
}


module.exports = SpeakerAPI
