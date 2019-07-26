import Layout from '../components/MyLayout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

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
      	name
      	url
        isFork
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

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
//  console.log(`Show data fetched. Count: ${data.length}`);
client
.query({
  query: GET_REPO_INFO
})
.then(result => console.log(result.data.user.repositories.nodes));

  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  
  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;