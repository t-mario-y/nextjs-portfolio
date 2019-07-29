import fetch from 'isomorphic-unfetch';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';

//apollo-boostを使用せずに各モジュールをインポートしてApollo Clientを生成
const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${
        process.env.GITHUB_PERSONAL_ACCESS_TOKEN
      }`,
      Accept: 'application/vnd.github.v4.idl',
    }
  })
  return forward(operation)
});

const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql', fetch });

const MyApolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
});

export default MyApolloClient;