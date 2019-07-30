import RepositoryCardAlbum from '../components/RepositoryCardAlbum';
import MyLayout from '../components/MyLayout';
import CircularIndeterminate from '../components/CircularIntermediate';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MyApolloClient from '../lib/simpleApolloClient';
import GET_REPO_INFO from '../lib/graphqlQuery';
import { ApolloProvider } from 'react-apollo';
import { Query } from "react-apollo";

const repositoryListStyles = makeStyles(theme => ({
  content: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

const repositoriesPageStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  title: { //スマホ縦画面で見出しが折り返すのを防止
    [theme.breakpoints.down('xs')]: {
      fontSize: "calc(2rem + 4px)"
    },
    textAlign: "center"
  }
}));

const RepositoryList = () => {
  const classes = repositoryListStyles();
  return (
    <ApolloProvider client={MyApolloClient}>
      <Query query={GET_REPO_INFO}>
        {({ loading, error, data }) => {
          if(error){
            return (
              <Container className={classes.content} maxWidth="lg">
                <Typography variant="h6" component="p" align="center">
                  リポジトリ情報の取得に失敗しました。
                </Typography>
              </Container>
            );
          }
          if (loading){
            return (
              <Container className={classes.content} align="center" maxWidth="lg">
                <CircularIndeterminate />
              </Container>
            );
          }
          const repositories = data.user.repositories.nodes;
          return (
            <Container className={classes.content} maxWidth="lg">
              <RepositoryCardAlbum repositories ={repositories} />
            </Container>
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
        <Typography variant="h3" component="h1" className={classes.title} color="textPrimary" gutterBottom>
          GitHub Repository
        </Typography>
      </Container>
      <RepositoryList />
    </MyLayout>
)};

export default Repositories;