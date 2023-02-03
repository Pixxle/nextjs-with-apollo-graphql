
import { gql } from "graphql-tag";

export const GET_USER_GQL = gql`
query getUser($id: ID!) {
    getUser(id: $id) {
        id
        name
    }
}
`

export const LIST_USER_GQL = gql`
query listUsers {
    listUsers {
        id
        name
    }
}
`

export const CREATE_USER_GQL = gql`
mutation createUser($name: String!) {
    createUser(name: $name) {
        id
        name
    }
}
`

export const UPDATE_USER_GQL = gql`
mutation updateUser($id: ID!, $name: String!) {
    updateUser(id: $id, name: $name) {
        id
        name
    }
}
`