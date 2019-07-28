import MyLayout from '../components/MyLayout';
import MyAvator from '../components/MyAvator';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const Index = () => {
  const classes = useStyles();
  return (
    <MyLayout>
      <Container maxWidth="lg" className={classes.heroContent}>
        <MyAvator/>
        <Typography component="h6" variant="h6" align="center" color="textPrimary" gutterBottom>
          Web App Engineer / Vocal Bass Player
        </Typography>
      </Container>
    </MyLayout>
)};

export default Index;