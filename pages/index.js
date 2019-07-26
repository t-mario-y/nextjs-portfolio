import Layout from '../components/MyLayout.js';
import RepositoryCard from '../components/RepositoryCard';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { Query } from "react-apollo";
import gql from "graphql-tag";


const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${
          process.env.GITHUB_PERSONAL_ACCESS_TOKEN
        }`
      }
    });
  }
});

const GET_REPO_INFO = gql`
{
  user(login: "t-mario-y") {
    repositories(first: 50, privacy: PUBLIC) {
      nodes{
        id
        name
        url
        description
        primaryLanguage{
          color
          name
        }
      }
    }
  }
}
`
const RepoList = () => (
  <ApolloProvider client={client}>
    <Query query={GET_REPO_INFO}>
      {({ loading, data }) => {
        if (loading) return <p>Loading...</p>;

        const repositories = data.user.repositories.nodes;
        return (
          <ul>
            {repositories.map(repo => (
              <li key={repo.id}>
                <RepositoryCard repo={repo}/>
              </li>
            ))}
          </ul>
        );
      }}
    </Query>
  </ApolloProvider>
);

const Index = () => (
  <Layout>
    <h1>My Repos.</h1>
    <RepoList/>
  </Layout>
);

export default Index;