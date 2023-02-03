import { ApolloClient, InMemoryCache } from "@apollo/client";
import GetBaseUrl from "@utils/getbase";

const client = new ApolloClient({
    uri: `${GetBaseUrl()}/api/graphql`,
    cache: new InMemoryCache(),
});

export default client;