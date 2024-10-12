import { createServer } from 'node:http';
import { createSchema, createYoga } from 'graphql-yoga';
import { useGraphQLSSE } from '@graphql-yoga/plugin-graphql-sse';

import { schema } from './application/schema.js';
import { resolvers } from './application/resolver.js';

const yoga = createYoga({
  schema: createSchema({
    typeDefs: schema,
    resolvers
  }),
  plugins: [
    useGraphQLSSE(),
  ]
});

const server = createServer(yoga);
server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql');
});
