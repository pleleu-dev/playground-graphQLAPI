const Query = require('./resolvers/query')
const Session = require('./resolvers/session')
const Mutation = require('./resolvers/mutation')
const resolvers = {
    Query,
    Mutation,
    Session,
    SessionOrError: {
        __resolveType(obj){
            if(obj.code){
                return 'Error'
            }
            return 'Session'
        }
    }
}

module.exports = resolvers