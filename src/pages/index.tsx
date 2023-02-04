import { TUserData} from '@graphql/users/type';
import { useQuery, useMutation, ApolloError} from '@apollo/client';
import {CREATE_USER_GQL, LIST_USER_GQL} from '@graphql/users/gql';
import { useEffect } from 'react';

export default function Home() {

  const [mutateFunction, _ ] = useMutation(CREATE_USER_GQL);
  useEffect(() => {
     mutateFunction({variables: {name: 'test'}});
  }, []);

  const {loading, data, error} : {loading: boolean, data: TUserData | undefined, error?: ApolloError} = useQuery(LIST_USER_GQL)

  return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data?.listUsers && data.listUsers.map((user) => <p key={Number(user.id)}>{user.name}</p>)} 
      </div>
  )
}