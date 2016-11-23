import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap';


class NavLeftLinks extends React.Component {
    render() {
        return (
            <Nav>
                <li><IndexLink to={'/'}>Home</IndexLink></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/skill'}>Skills</Link></li>
                <li><Link to={'/project'}>Projects</Link></li>
                <li><Link to={'/work'}>Work Experience</Link></li>
            </Nav>
        );
    }
};

class NavRightLinks extends React.Component {
    render() {
        return (
           <Nav pullRight>
              <NavItem href={'/docs'}>API Docs</NavItem>
              <NavItem href={'https://github.com/GabrielRivera21/Portfolio'}>Source</NavItem>
           </Nav>
        );
    }
};

class NavWrapper extends React.Component {
    render() {
        return (
            <Navbar className="navbar-material-blue-800">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Gabriel Portfolio</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {this.props.children}
                </Navbar.Collapse>
            </Navbar>
        );
    }
};

class MainNavbar extends React.Component {
  render() {
    return (
        <NavWrapper>
            <NavLeftLinks/>
            <NavRightLinks/>
        </NavWrapper>
    );
  }
};

export default MainNavbar;
