import MyAppBar from './MyAppBar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

// ページヘッダ(App Bar)、コンテンツ(Contanier)の枠組みを共通化する
const layoutStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const MyLayout = props => {
  const classes = layoutStyles();
  return (
  <React.Fragment>
    <MyAppBar />
    <Container maxWidth="lg" className={classes.heroContent}>
      {props.children}
    </Container>
  </React.Fragment>
)};

export default MyLayout;