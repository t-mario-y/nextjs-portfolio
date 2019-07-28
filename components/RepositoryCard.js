import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const repositoryCardStyles = makeStyles({
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 13,
  },
  repoLinkButton: {
    textTransform: 'none',
  }
});
const languageChipStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1),
  },
}));

const LanguageChip = ({ language }) => {
  const classes = languageChipStyles();
  const color = language === "none" ? "secondary" : "primary";
  return (
    <Chip size="small" color={color} label={language} className={classes.chip} />
  );
};

const RepositoryCard = ({ repo }) => {
  const classes = repositoryCardStyles();
  const lang = repo.primaryLanguage === null ? "none": repo.primaryLanguage.name;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {repo.name}
        </Typography>
        <Typography variant="body2" component="p">
          {repo.description}
        </Typography>
      </CardContent>
      <CardActions>
        <LanguageChip language={lang}/>
        <a href={repo.url} target="#">
          <Button className={classes.repoLinkButton} size="small">Jump to repo</Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default RepositoryCard;