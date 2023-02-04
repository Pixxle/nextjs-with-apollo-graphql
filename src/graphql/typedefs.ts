import {gql} from "graphql-tag";
import {USER_TYPE_DEF, USER_QUERY_DEF, USER_MUTATION_DEF} from "./users/gql";

const typeDefs = gql`
  ${USER_TYPE_DEF}

  type Query {
    ${USER_QUERY_DEF}
  }

  type Mutation {
    ${USER_MUTATION_DEF}
  }
`;

export default typeDefs;