import express from 'express';
import { ApolloServer } from 'apollo-server-express'
// Load schema & resolver
import typeDefs from './schema/schema.js'
import resolvers from './resolver/resolver.js'

const app = express();
const PORT = 3000;

const server = new ApolloServer({ // create a server through ApolloServer({typeDefs & resolver})
	typeDefs,
	resolvers
})
await server.start();
server.applyMiddleware( {app})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
});
