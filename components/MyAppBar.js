import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const myAppBarStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textTransform: 'none'
  }
}));

const MyAppBar = () => {
  const classes = myAppBarStyles();

  return (
    <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          t-mario-y portfolio
        </Typography>
        <nav>
          <Link variant="button" color="textPrimary" href="/profile" className={classes.link}>
            Profile
          </Link>
          <Link variant="button" color="textPrimary" href="/skills" className={classes.link}>
            Skills
          </Link>
          <Link variant="button" color="textPrimary" href="/repositories" className={classes.link}>
            GitHub
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;