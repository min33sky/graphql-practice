import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import schema from './schema';

(async () => {
  const server = new ApolloServer({
    typeDefs: schema,
  });

  const app = express();
  await server.start();
  server.applyMiddleware({
    app,
    path: '/graphql',
    cors: {
      origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
      credentials: true,
    },
  });

  await app.listen({ port: 8000 });

  console.log(`Server listening on 8000`);
})();
