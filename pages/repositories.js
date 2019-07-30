import RepositoryCardAlbum from '../components/RepositoryCardAlbum';
import MyLayout from '../components/MyLayout';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MyApolloClient from '../lib/complexApolloClient';
import GET_REPO_INFO from '../lib/graphqlQuery';
import { ApolloProvider } from 'react-apollo';
import { Query } from "react-apollo";

const repositoriesPageStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const RepoList = () => (
  <ApolloProvider client={MyApolloClient}>
    <Query query={GET_REPO_INFO}>
      {({ loading, error, data }) => {
        if(error){
          return (<p>GitHub API Access error!</p>);
        }
        if (loading){
          return (<p>Loading...</p>);
        }
        const repositories = data.user.repositories.nodes;
        return (
          <RepositoryCardAlbum repositories ={repositories} />
        );
      }}
    </Query>
  </ApolloProvider>
);

const Repositories = () => {
  const classes = repositoriesPageStyles();
  return (
    <MyLayout>
      <Container maxWidth="lg" className={classes.heroContent}>
        <Typography variant="h3" component="h1" align="center" color="textPrimary" gutterBottom>
          GitHub Repository
        </Typography>
      </Container>
      <RepoList />
    </MyLayout>
)};

export default Repositories;