const { ApolloServer, ApolloError } = require('apollo-server');
const SessionAPI = require("./datasources/sessions");
const SpeakerAPI = require("./datasources/speakers");

const typeDefs = require('./schema');

const resolvers = require('./resolvers');
const { formatError } = require('graphql');
    
const dataSources = () =>({
    sessionAPI : new SessionAPI(),
    speakerAPI : new SpeakerAPI()
})

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
    debug : false,
    formatError : (err)=>{
        if(err.extensions.code === "INTERNAL_SERVER_ERROR"){
            return new ApolloError('We are some trouble', "ERROR", {token : "id3435", })
        }
        return err;
    }
});

server
.listen({
    port : process.env.PORT || 5000
})
.then(({url})=>{
    console.log(`QraphQL runnning at : ${url}`)
})