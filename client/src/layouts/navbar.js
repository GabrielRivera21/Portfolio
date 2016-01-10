import React from 'react';
import { Link, IndexLink } from 'react-router';

var NavLinks = React.createClass({
    getInitialState() {
        return {activeTabClassName: "home"}
    },
    render() {
        return (
          <ul className="nav navbar-nav">
              <li active="active"><IndexLink to={'/'}>Home</IndexLink></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/skill'}>Skills</Link></li>
              <li><Link to={'/project'}>Projects</Link></li>
              <li><Link to={'/work'}>Work</Link></li>
          </ul>
        )
    }
});

var NavDjangoLinks = React.createClass({
    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/docs/">API Docs</a></li>
            </ul>
        )
    }
})

var NavWrapper = React.createClass({
    render() {
        return (
         <nav className="navbar navbar-material-blue-800">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Gabriel's Portfolio</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  {this.props.children}
                </div>
              </div>
         </nav>
      )
    }
});

var Navbar = React.createClass({
  render() {
    return (
        <NavWrapper>
            <NavLinks/>
            <NavDjangoLinks/>
        </NavWrapper>
    );
  }
});

export default Navbar;