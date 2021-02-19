const { gql} = require('apollo-server');


module.exports = gql`
    type Query{
        sessions(
            id : ID
            title : String
            description : String
            startsAt : String
            endsAt : String
            room : String
            format : String
            level : String
        ):[Session]
        sessionById(id:ID):SessionOrError
        speakers: [Speaker]
        speakerById(id:ID):Speaker
    }
    type Mutation{
        toggleFavoriteSession(id:ID) : Session
        addNewSession(session:SessionInput):Session
    }
    type Speaker {
        id : ID,
        bio : String
        name : String
        sessions : [Session]
    }
    input SessionInput{
        title : String
        description : String
    }
    type Session {
        id : ID,
        title : String
        description : String
        startsAt : String
        endsAt : String
        room : String
        format : String
        track : String @deprecated(reason:"useless")
        level : String
        favorite : Boolean
        speakers : [Speaker]
    }
    union SessionOrError = Session | Error
    type Error {
        code: String
        message: String
        token : String
    }`