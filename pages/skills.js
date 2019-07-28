import MyLayout from '../components/MyLayout';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const skillPageStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  textContent: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

const Skills = () => {
  const classes = skillPageStyles();
  return (
    <MyLayout>
      <Container maxWidth="xl" className={classes.heroContent}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          言語スキル
        </Typography>
      </Container>
      <Container maxWidth="lg" className={classes.textContent}>
        <Typography component="h2" variant="h4" gutterBottom>
          Level 3
        </Typography>
        <Typography component="p" variant="h6" color="textSecondary" gutterBottom>
          アプリケーション開発のために、十分に運用できる
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - Java
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - JSF
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - JavaScript
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - jQuery
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - Oracle DB
        </Typography>
      </Container>
      <Container maxWidth="lg" className={classes.textContent}>
        <Typography component="h2" variant="h4" gutterBottom>
          Level 2
        </Typography>
        <Typography component="p" variant="h6" color="textSecondary" gutterBottom>
          業務で使用したことがあるが、さらなる習熟が必要
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - Seasar2
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - Vue.js
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - CSS
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - BootStrap
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - PowerShell
        </Typography>
      </Container>
      <Container maxWidth="lg" className={classes.textContent}>
        <Typography component="h2" variant="h4" gutterBottom>
          Level 1
        </Typography>
        <Typography component="p" variant="h6" color="textSecondary" gutterBottom>
          興味を持ち、個人開発で使用している
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - React
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - Next.js
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - Google Apps Script
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - Spring Boot
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
        - Progressive Web Apps
        </Typography>
      </Container>
    </MyLayout>
)};

export default Skills;