import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const SkillList = ({ skillList }) => {
  const dense = false;
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <Divider />
        <List dense={dense}>
          {skillList.map((skill, idx) => (
            <React.Fragment key={idx}>
              <ListItem>
                <ListItemText primary={skill.name} />
              </ListItem>
              <Divider variant="middle" />
            </React.Fragment>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default SkillList;
