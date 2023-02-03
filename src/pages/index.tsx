import { TUser } from '@graphql/users/type';
import { useQuery, useMutation} from '@apollo/client';
import {CREATE_USER_GQL, LIST_USER_GQL} from '@graphql/users/gql';
import { useEffect } from 'react';

export default function Home({ user }: { user: TUser }) {

  const [mutateFunction, { data, loading, error }] = useMutation(CREATE_USER_GQL);
  const {loading:listLoading, data:listData, error:listError} = useQuery(LIST_USER_GQL)

  useEffect(() => {
    mutateFunction({variables: {name: 'test'}});
  }, []);

  console.log(listData);

  return (
      <div>
        {listLoading && <p>Loading...</p>}
        {listError && <p>Error: {listError.message}</p>}
        {listData && listData.listUsers.map((user: TUser) => <p key={Number(user.id)}>{user.name}</p>)}
      </div>
  )
}