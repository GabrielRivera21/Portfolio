import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Index from './layouts/Index'
import Home from './components/Home'
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';
import Work from './components/Work';

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Index}>
        <IndexRoute component={Home}/>
        <Route path="about" component={About}/>
        <Route path="project" component={Project}/>
        <Route path="skill" component={Skill}/>
        <Route path="work" component={Work}/>
      </Route>
    </Router>,
    document.getElementById('content')
);