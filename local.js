require("dotenv").config();
const { ApolloServer } = require("apollo-server");

const { typeDefs } = require("./src/type_defs");
const { resolvers } = require("./src/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT || 3001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
