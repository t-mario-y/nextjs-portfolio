import Grid from '@material-ui/core/Grid';
import RepositoryCard from './RepositoryCard'

const RepositoryCardAlbum = ({ repositories }) => {
  return (
    <Grid container spacing={3}>
      {repositories.map(repo => (
        <Grid item key={repo.id} xs={12} sm={6} md={4}>
          <RepositoryCard repository={repo}/>
        </Grid>
      ))}
    </Grid>
)};

export default RepositoryCardAlbum;