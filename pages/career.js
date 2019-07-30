import MyLayout from '../components/MyLayout';
import works from '../src/works';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const careerPageStyles = makeStyles(theme => ({
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

const workSectionStyles = makeStyles(theme => ({
  textContent: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  }
}));

const WorkSection = ({ workObj }) => {
  const classes = workSectionStyles();
  return (
    <Container maxWidth="lg" className={classes.textContent}>
      <Typography variant="h6" component="h3" gutterBottom>
        期間
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        {workObj.duration}
      </Typography>
      <Typography variant="h6" component="h3" gutterBottom>
        業務内容
      </Typography>
      {workObj.about.map(line => (
        <Typography key={line} variant="body1" component="p" gutterBottom>
          {line}
        </Typography>
      ))}
      <Typography variant="h6" component="h3" gutterBottom>
        技術スタック
      </Typography>
      {workObj.techStuck.map(tech => (
        <Typography key={tech} variant="body1" component="p" gutterBottom>
          - {tech}
        </Typography>
      ))}
      <Typography variant="h6" component="h3" gutterBottom>
        職位
      </Typography>
      {workObj.team.map(line => (
        <Typography key={line} variant="body1" component="p" gutterBottom>
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
      <Container maxWidth="lg" className={classes.heroContent}>
        <Typography variant="h3" component="h1" className={classes.title} color="textPrimary" gutterBottom>
          職務経歴
        </Typography>
      </Container>
      {works.map((work, idx) => (
        <WorkSection key={idx} workObj={work}/>
      ))}
    </MyLayout>
)};

export default Career;