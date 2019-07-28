import MyLayout from '../components/MyLayout';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  }
}));

const Prifile = () => {
  const classes = useStyles();
  return (
    <MyLayout>
      <Container maxWidth="xl" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          友井 義明 / t-mario-y
        </Typography>
      </Container>
      <Container maxWidth="lg" component="main">
      <Typography component="p" variant="h5" gutterBottom>
          Webアプリケーションエンジニア
        </Typography>
        <Typography component="p" variant="h5" gutterBottom>
          アカペラコーラス(Vocal Bass)
        </Typography>
      </Container>
    </MyLayout>
)};

export default Prifile;