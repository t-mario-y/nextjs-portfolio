import fetch from "isomorphic-unfetch";
import ApolloClient from "apollo-boost";

//apollo-boostを使用してApollo Clientを生成
const MyApolloClient = new ApolloClient({
  fetch: fetch,
  uri: "https://api.github.com/graphql",
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    });
  },
});

export default MyApolloClient;
