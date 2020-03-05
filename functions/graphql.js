import ApolloServer from "apollo-server-lambda";
import { typeDefs } from "./bundle/type_defs";
import { resolvers } from "./bundle/resolvers";

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
