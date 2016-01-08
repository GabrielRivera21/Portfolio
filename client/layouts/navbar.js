import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
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
              <ul className="nav navbar-nav">
                  <li><Link to={'/about'}>About</Link></li>
                  <li><Link to={'/skill'}>Skills</Link></li>
                  <li><Link to={'/project'}>Projects</Link></li>
                  <li><Link to={'/work'}>Work</Link></li>
              </ul>
            </div>
          </div>
      </nav>
    );
  }
}
export default Navbar;