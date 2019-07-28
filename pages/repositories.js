import Album from '../components/Album';
import MyLayout from '../components/MyLayout';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import fetch from 'isomorphic-unfetch';
import { ApolloProvider } from 'react-apollo';
import { Query } from "react-apollo";

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
        if (loading){
          return (<p>Loading...</p>);
        }
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

const Repositories = () => {
  const classes = useStyles();
  return (
    <MyLayout>
      <Container maxWidth="xl" className={classes.heroContent}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          GitHub Repository Links
        </Typography>
      </Container>
      <RepoList/>
    </MyLayout>
)};

export default Repositories;