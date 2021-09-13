const {ApolloServer} = require('appolo-server');
const mongoose = require('mongoose');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// connection to mongodb
mongoose.connect('mongodb://localhost:27017/blajargraphql', {
    useNewParser : true,
    useUnifiedTopology : true,
    useFindAndModify : true
});

const server = new AppoloServer({ typeDefs, resolvers});

server.listen().then(({ url })=> {
    console.log(`Server ready at ${url}`);
});