import { createServer } from 'node:http';
import { createSchema, createYoga } from 'graphql-yoga';

import { schema } from './application/schema.js';
import { /*pubsub,*/ resolvers } from './application/resolver.js';

const yoga = createYoga({
  schema: createSchema({
    typeDefs: schema,
    resolvers
  })
});

// TODO ignore for now, make something working with the query
// let i = 0;
// setInterval(() => {
//   i++;
//   pubsub.publish('hello', `world ${i}`);
// }, 5_000);

const server = createServer(yoga);
server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql');
});
