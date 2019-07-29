import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const listItemStyles =  makeStyles({
  listIconImage: {
    height: 30
  }
});

const SkillList = ({skillList}) => {
  const dense = false;
  const classes = listItemStyles();
  return(
    <Grid container>
      <Grid item xs={12} md={12}>
        <Divider />
          <List dense={dense}>
          {skillList.map((skill, i) => (
            <React.Fragment key={i}>
              <ListItem>
                <ListItemIcon>
                  <img className={classes.listIconImage} src={skill.logoSrc}/>
                </ListItemIcon>
                <ListItemText primary={skill.name} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
          </List>
      </Grid>
    </Grid>
)};

export default SkillList;