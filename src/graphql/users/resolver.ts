import { TUser } from '@/graphql/users/type';

const users : TUser[] = [
    {
      id: '1',
      name: 'Elizabeth Bennet',
    },
    {
      id: '2',
      name: 'Fitzwilliam Darcy',
    },
  ];
  
export function getUser(parent:any, args:TUser, context:any, info:any) {
    return users.find((user) => user.id === args.id);
}

export function createUser(parent:any, args:TUser, context:any, info:any) {
    const newUser : TUser = {
      id: String(users.length + 1),
      name: args.name,
    };
    users.push(newUser);
    return newUser;
}

export function updateUser(parent:any, args:TUser, context:any, info:any) {
    const user = users.find((user) => user.id === args.id);
    if (!user) {
      throw new Error('User not found');
    }
    user.name = args.name;
    return user;
}