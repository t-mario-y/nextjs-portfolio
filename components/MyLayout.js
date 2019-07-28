import MyAppBar from './MyAppBar';

import { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

// ページヘッダ(App Bar)、コンテンツ(Contanier)の枠組みを共通化する
const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const MyLayout = props => {
  const classes = useStyles();
  return (
  <Fragment>
    <MyAppBar />
    {/* Hero unit */}
    <Container maxWidth="xl" component="main" className={classes.heroContent}>
      {props.children}
    </Container>
    {/* End hero unit */}
  </Fragment>
)};

export default MyLayout;