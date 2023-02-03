
import { gql } from "graphql-tag";

export function UserQueryGQL(id:string, fields:string[]){
    return {
        query: gql`{
          user(id: ${id}) {
            ${fields.join(' ')}
          }
    }`}
}