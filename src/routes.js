import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
}
