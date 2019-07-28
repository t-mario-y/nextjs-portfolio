import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 250,
    height: 250,
  },
});

const MyAvatar = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="t-mario-y" src="/static/avator.png" className={classes.avatar} />
    </Grid>
)};

export default MyAvatar;