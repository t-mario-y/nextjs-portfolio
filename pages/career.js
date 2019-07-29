import MyLayout from '../components/MyLayout';
import works from '../src/works';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const careerPageStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  }
}));

const workSectionStyles = makeStyles(theme => ({
  textContent: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  }
}));

const WorkSection = ({workObj}) => {
  const classes = workSectionStyles();
  return (
    <Container maxWidth="lg" className={classes.textContent}>
      <Typography component="h3" variant="h6" gutterBottom>
        期間
      </Typography>
      <Typography component="p" variant="body1" gutterBottom>
        {workObj.duration}
      </Typography>
      <Typography component="h3" variant="h6" gutterBottom>
        業務内容
      </Typography>
      {workObj.about.map(line => (
        <Typography key={line} component="p" variant="body1" gutterBottom>
          {line}
        </Typography>
      ))}
      <Typography component="h3" variant="h6" gutterBottom>
        技術スタック
      </Typography>
      {workObj.techStuck.map(tech => (
        <Typography key={tech} component="p" variant="body1" gutterBottom>
          - {tech}
        </Typography>
      ))}
      <Typography component="h3" variant="h6" gutterBottom>
        職位
      </Typography>
      {workObj.team.map(line => (
        <Typography key={line} component="p" variant="body1" gutterBottom>
          {line}
        </Typography>
      ))}
     </Container>
  );
}

const Career = () => {
  const classes = careerPageStyles();
  return (
    <MyLayout>
      <Container maxWidth="xl" className={classes.heroContent}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          職務経歴
        </Typography>
      </Container>
      {works.map(work => (
        <WorkSection key={work.id} workObj={work}/>
      ))}
    </MyLayout>
)};

export default Career;