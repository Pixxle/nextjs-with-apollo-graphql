import {getUser, createUser, updateUser} from './users/resolver';

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