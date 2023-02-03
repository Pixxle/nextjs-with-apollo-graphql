import {gql} from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    getUser(id: ID!): User
    listUsers: [User]
  }

  type Mutation {
    createUser(name: String!): User
    updateUser(id: ID!, name: String!): User
  }
`;

export default typeDefs;