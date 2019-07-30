import MyLayout from '../components/MyLayout';
import SkillList from '../components/SkillList'

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const skillPageStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  textContent: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  paperRoot: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  },
  title: { //スマホ縦画面で見出しが折り返すのを防止
    [theme.breakpoints.down('xs')]: {
      fontSize: "calc(2rem + 4px)"
    },
    textAlign: "center"
  }
}));

const level3List = [
  {
    name: "Java"
  },
  {
    name: "JavaScript"
  },
  {
    name: "jQuery"
  },
  {
    name: "Oracle DB"
  }
];

const level2List = [
  {
    name: "Seasar2"
  },
  {
    name: "Vue.js"
  },
  {
    name: "CSS"
  },
  {
    name: "BootStrap"
  },
  {
    name: "PowerShell"
  }
];

const level1List = [
  {
    name: "React"
  },
  {
    name: "Next.js"
  },
  {
    name: "Google Apps Script"
  },
  {
    name: "Spring Boot"
  },
  {
    name: "Progressive Web Apps"
  }
];

const Skills = () => {
  const classes = skillPageStyles();
  return (
    <MyLayout>
      <Container maxWidth="lg" className={classes.heroContent}>
        <Typography variant="h3" component="h1" className={classes.title} color="textPrimary" gutterBottom>
          技術スキル
        </Typography>
      </Container>
      <Container maxWidth="lg" className={classes.textContent}>
        <Paper className={classes.paperRoot}>
          <Typography variant="h4" component="h3">
            Level 3
          </Typography>
          <Typography variant="h6" component="p" color="textSecondary">
            自由にアプリケーション開発できる
          </Typography>
          <SkillList skillList={level3List} />
        </Paper>
      </Container>
      <Container maxWidth="lg" className={classes.textContent}>
        <Paper className={classes.paperRoot}>
          <Typography variant="h4" component="h3">
            Level 2
          </Typography>
          <Typography variant="h6" component="p" color="textSecondary">
            実際の業務経験あり
          </Typography>
          <SkillList skillList={level2List} />
        </Paper>
      </Container>
      <Container maxWidth="lg" className={classes.textContent}>
        <Paper className={classes.paperRoot}>
          <Typography variant="h4" component="h3">
            Level 1
          </Typography>
          <Typography variant="h6" component="p" color="textSecondary">
            興味を持ち、個人開発で使用している
          </Typography>
          <SkillList skillList={level1List} />
        </Paper>
      </Container>
    </MyLayout>
)};

export default Skills;