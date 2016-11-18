import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Index from './layouts/Index'
import Home from './components/Home'
import About from './components/About';
import Project from './components/Project';
import Skill from './components/Skill';
import Work from './components/Work';

import '../static/assets/css/main.css';

ReactDOM.render(
    <Router history={hashHistory}>
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
