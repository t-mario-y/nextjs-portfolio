import MyLayout from '../components/MyLayout';
import MyAvatar from '../components/MyAvatar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const indexPageStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const Index = () => {
  const classes = indexPageStyles();
  return (
    <MyLayout>
      <Container maxWidth="lg" className={classes.heroContent}>
        <MyAvatar/>
        <Typography component="p" variant="h6" align="center" color="textPrimary" gutterBottom>
          Web App Engineer / Vocal Bass Player
        </Typography>
      </Container>
    </MyLayout>
)};

export default Index;