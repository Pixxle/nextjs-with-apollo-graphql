import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import resolvers from '@graphql/resolvers';
import typeDefs from '@graphql/typedefs';

const server = new ApolloServer({
    resolvers,
    typeDefs,
  });
  
  export default startServerAndCreateNextHandler(server);