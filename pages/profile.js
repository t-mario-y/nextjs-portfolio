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
      <Container maxWidth="lg" className={classes.heroContent}>
        <Typography variant="h3" component="h1" align="center" color="textPrimary" gutterBottom>
          友井 義明 / t-mario-y
        </Typography>
      </Container>
      <Container maxWidth="lg" className={classes.textContent}>
        <Typography variant="h4" component="h2" gutterBottom>
          Web App Engineer
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          2014年4月~ 株式会社情報創研
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          <Link href="/career" className={classes.link}>
            職務経歴はこちら
          </Link>
        </Typography>
      </Container>
      <Container maxWidth="lg" className={classes.textContent}>
        <Typography variant="h4" component="h2" gutterBottom>
          Vocal Bass Player
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          2008年より、複数のアカペラコーラスグループで継続的に活動。
        </Typography>
        <Typography variant="h6" gcomponent="p" gutterBottom>
          <Link href="http://festival.tcmc.org.tw/2016#625" target="#">2016 TCMC a cappella competition</Link>をはじめ、複数の国際大会で入賞経験あり。
        </Typography>
      </Container>
    </MyLayout>
)};

export default Profile;