// https://www.apollographql.com/docs/apollo-server/data/resolvers/

const users = [
  {
    id: '1',
    name: 'Elizabeth Bennet',
  },
  {
    id: '2',
    name: 'Fitzwilliam Darcy',
  },
];


const resolvers = {
    Query: {
      user(parent:any, args:any, context:any, info:any) {
        return users.find((user) => user.id === args.id);
      }
    },
  };

export default resolvers;