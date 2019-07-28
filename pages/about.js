import { Fragment } from 'react';

const About = () => (
  <Fragment>
    <Container maxWidth="sm" component="main" className={classes.heroContent}>
    <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
      Here is about page.
    </Typography>
    </Container>
  </Fragment>
);

export default About;