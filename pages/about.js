import Layout from '../components/MyLayout.js';
import Button from '@material-ui/core/Button';

const About = () => (
  <div>
    <Layout>
      <p>This is the about page.</p>
    </Layout>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>
);

export default About;