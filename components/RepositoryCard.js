import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

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
)};

const RepositoryCard = ({ repository }) => {
  const classes = repositoryCardStyles();
  const language = repository.primaryLanguage === null ? "none": repository.primaryLanguage.name;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {repository.name}
        </Typography>
        <Typography variant="body2" component="p">
          {repository.description}
        </Typography>
      </CardContent>
      <CardActions>
        <LanguageChip language={language}/>
        <Link href={repository.url} target="#" className={classes.repoLinkButton}>Link to Repo</Link>
      </CardActions>
    </Card>
)};

export default RepositoryCard;