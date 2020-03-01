require("dotenv").config();
const { ApolloServer } = require("apollo-server");

const { resolvers } = require("./src/resolvers");
const { typeDefs } = require("./src/type_defs");

const schema = new ApolloServer({ typeDefs, resolvers });

schema.listen({ port: process.env.PORT || 3001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
