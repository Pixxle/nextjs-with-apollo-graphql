import {createUser, updateUser, getUser, listUsers} from './users/resolver';

const resolvers = {
    Query: {
      getUser:getUser,
      listUsers:listUsers,
    },
    Mutation: {
      createUser: createUser,
      updateUser: updateUser,
    },
  };

export default resolvers;