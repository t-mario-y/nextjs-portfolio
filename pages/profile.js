import MyLayout from '../components/MyLayout';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const profilePageStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  textContent: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

const Profile = () => {
  const classes = profilePageStyles();
  return (
    <MyLayout>
      <Container maxWidth="xl" className={classes.heroContent}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          友井 義明 / t-mario-y
        </Typography>
      </Container>
      <Container maxWidth="lg" className={classes.textContent}>
        <Typography component="h2" variant="h4" gutterBottom>
          Web App Engineer
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
          2014年4月~ 株式会社情報創研
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
          <Link href="/career" className={classes.link}>
            職務経歴はこちら
          </Link>
        </Typography>
      </Container>
      <Container maxWidth="lg" className={classes.textContent}>
        <Typography component="h2" variant="h4" gutterBottom>
          Vocal Bass Player
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
          2008年より、複数のアカペラコーラスグループで継続的に活動。
        </Typography>
        <Typography component="p" variant="h6" gutterBottom>
          <Link href="http://festival.tcmc.org.tw/2016#625" target="#">2016 TCMC a cappella competition</Link>をはじめ、複数の国際大会で入賞経験あり。
        </Typography>
      </Container>
    </MyLayout>
)};

export default Profile;