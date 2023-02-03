import {gql} from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    user(id: ID!): User
  }
`;

export default typeDefs;