import Album from '../components/Albums';
import MyAppBar from '../components/MyAppBar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';

const client = new ApolloClient({
  fetch: fetch,
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
    repositories(first: 50, privacy: PUBLIC, isFork: false) {
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
          <Album repositories ={repositories} />
        );
      }}
    </Query>
  </ApolloProvider>
);

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
  <Fragment>
    <MyAppBar />
    {/* Hero unit */}
    <Container maxWidth="xl" component="main" className={classes.heroContent}>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
          My GitHub Repositories
        </Typography>
      </Container>
      <RepoList/>
    </Container>
    {/* End hero unit */}
  </Fragment>
)};

export default Index;