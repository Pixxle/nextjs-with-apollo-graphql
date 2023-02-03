import {getUser, createUser, updateUser} from './resolver_functions/user';

const resolvers = {
    Query: {
      user:getUser,
    },
    Mutation: {
      createUser: createUser,
      updateUser: updateUser,
    },
  };

export default resolvers;