const { ApolloServer } = require("apollo-server-lambda");

const { typeDefs } = require("./src/type_defs");
const { resolvers } = require("./src/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: "*",
    credentials: false
  },
  endpointURL: "/graphql"
});
