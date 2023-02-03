import client from '@graphql/client'
import { gql } from 'graphql-tag'
import { TUser } from '@/graphql/types/user';

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
  const { data } = await client.query({
    query: gql`{
      user(id: 1) {
        name
      }
    }`});


  return {
    props: {
      user: data.user
    },
  }
}