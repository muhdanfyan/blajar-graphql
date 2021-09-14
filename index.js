const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./schema.js');
const resolvers = require('./resolvers');
const {ApolloServerPluginLandingPageGraphQLPlayground} = require('apollo-server-core');

// connection to mongodb
mongoose.connect('mongodb://localhost:27017/blajargraphql', {
    // useNewParser : true,
    useUnifiedTopology : true
    // useFindAndModify : true
});

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    plugins : [
        ApolloServerPluginLandingPageGraphQLPlayground
    ]
});

server.listen().then(({ url })=> {
    console.log(`Server ready at ${url}`);
});