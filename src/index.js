const { createLocalServer } = require("./server");

const server = createLocalServer();

server.listen({ port: process.env.PORT || 3001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
