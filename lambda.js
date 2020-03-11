const { ApolloServer } = require("apollo-server-lambda");

const { typeDefs } = require("./src/type_defs");
const { resolvers } = require("./src/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context
  })
});

module.exports = {
  server
};
