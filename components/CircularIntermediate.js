import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const circularProgressStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  },
}));

const CircularIndeterminate = () => {
  const classes = circularProgressStyles();
  return (
    <CircularProgress className={classes.progress} />
)};

export default CircularIndeterminate;