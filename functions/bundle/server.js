require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const { ApolloServerLambda } = require("apollo-server-lambda");

const { resolvers } = require("./resolvers");
const { typeDefs } = require("./type_defs");

const serverConfig = {
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
};

const createLambdaServer = () => new ApolloServerLambda(serverConfig);

const createLocalServer = () => new ApolloServer(serverConfig);

module.exports = { createLambdaServer, createLocalServer };
