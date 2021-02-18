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
        sessionById(id:ID):Session
        speakers: [Speaker]
        speakerById(id:ID):Speaker
    }
    type Speaker {
        id : ID,
        bio : String
        name : String
        sessions : [Session]
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
    }`