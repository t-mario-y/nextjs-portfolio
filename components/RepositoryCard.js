import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 320
  },
  title: {
    fontSize: 14,
  },
});

const RepositoryCard = ({ repo }) => {
  const classes = useStyles();
  //console.log(repo.primaryLanguage);
  //const lang = repo.primaryLanguage.name;
  const lang = repo.primaryLanguage === null ? "": repo.primaryLanguage.name;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {repo.name}
        </Typography>
        <Typography variant="body2" component="p">
          {repo.description}
        </Typography>
        <Typography variant="body2" component="p">
          language:{lang}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={repo.url} target="#">
          <Button size="small">Jump to repo</Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default RepositoryCard;