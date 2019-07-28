import MyLayout from '../components/MyLayout';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const Skills = () => {
  const classes = useStyles();
  return (
    <MyLayout>
      <Container maxWidth="xl" component="main" className={classes.heroContent}>
        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
          Here are skills.
        </Typography>
      </Container>
    </MyLayout>
)};

export default Skills;