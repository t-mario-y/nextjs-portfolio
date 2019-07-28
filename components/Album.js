import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import RepositoryCard from './RepositoryCard'

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  }
}));

const Album = ({repositories}) => {
  const classes = useStyles();
  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container spacing={3}>
          {repositories.map(repo => (
            <Grid item key={repo.id} xs={12} sm={6} md={4}>
              <RepositoryCard repo={repo}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

export default Album;