const ApolloServer = require("apollo-server-lambda");
const { typeDefs } = require("./bundle/type_defs");
const { resolvers } = require("./bundle/resolvers")

const server = () =>
  new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true
  });

exports.handler = server.createHandler({
  cors: {
    origin: "*"
  }
});
