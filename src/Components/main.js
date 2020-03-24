import React from 'react';
import LandingPage from './landingPage';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';
import About from './Aboutme';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      {/* <Route path="/Aboutme" component={AboutMe} />  */}
      <Route path="/About" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Switch>
  )
  
  export default Main;
  