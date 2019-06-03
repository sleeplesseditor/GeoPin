const { ApolloServer } = require("apollo-server");

const typeDefs = require("./typeDef");
const resolvers = require("./resolvers");

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Server is Listening on ${url}`)
});