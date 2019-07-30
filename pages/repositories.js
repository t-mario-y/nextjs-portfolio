import RepositoryCardAlbum from '../components/RepositoryCardAlbum';
import MyLayout from '../components/MyLayout';
import CircularIndeterminate from '../components/CircularIntermediate';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MyApolloClient from '../lib/complexApolloClient';
import GET_REPO_INFO from '../lib/graphqlQuery';
import { ApolloProvider } from 'react-apollo';
import { Query } from "react-apollo";

const repositoryListStyles = makeStyles(theme => ({
  hoge: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: "center"
  }
}));

const repositoriesPageStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const RepositoryList = () => {
  const classes = repositoryListStyles();
  return (
  <ApolloProvider client={MyApolloClient}>
    <Query query={GET_REPO_INFO}>
      {({ loading, error, data }) => {
        if(error){
          return (
            <Container className={classes.hoge} maxWidth="lg">
              <Typography variant="h6" component="p">
                リポジトリ情報の取得に失敗しました。
              </Typography>
            </Container>
          );
        }
        if (loading){
          return (
            <Container className={classes.hoge} maxWidth="lg">
              <CircularIndeterminate />
            </Container>
          );
        }
        const repositories = data.user.repositories.nodes;
        return (
          <RepositoryCardAlbum repositories ={repositories} />
        );
      }}
    </Query>
  </ApolloProvider>
)};

const Repositories = () => {
  const classes = repositoriesPageStyles();
  return (
    <MyLayout>
      <Container maxWidth="lg" className={classes.heroContent}>
        <Typography variant="h3" component="h1" align="center" color="textPrimary" gutterBottom>
          GitHub Repository
        </Typography>
      </Container>
      <RepositoryList />
    </MyLayout>
)};

export default Repositories;