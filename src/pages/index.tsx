import client from '@graphql/client'
import { gql } from 'graphql-tag'
import { TUser } from '@/graphql/users/type';
import { UserQueryGQL } from '@/graphql/users/functions';

export default function Home({ user }: { user: TUser }) {
  return (
    <>
      <div>
        {user.name}
      </div>
    </>
  )
}

export async function getStaticProps() {

  // fetch data from an graphql api
  const { data } = await client.query(UserQueryGQL('2', ['id', 'name']));
  
  return {
    props: {
      user: data.user
    },
  }
}