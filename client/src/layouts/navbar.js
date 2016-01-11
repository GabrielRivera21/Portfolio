import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Navbar, NavItem, Nav, Button } from 'react-bootstrap';


var NavLeftLinks = React.createClass({
    getInitialState: function() {
        return {
            links: [
                {title: "About", url: "/about"},
                {title: "Skills", url: "/skill"},
                {title: "Projects", url: "/project"},
                {title: "Work Experience", url: "/work"}
            ]
        };
    },
    render: function() {
        var links = this.state.links.map(function(link, i) {
            return (
                <li key={link.url}><Link to={link.url}>{link.title}</Link></li>
            )
        });
        return (
            <Nav>
                <li><IndexLink to={'/'}>Home</IndexLink></li>
                {links}
            </Nav>
        );
    }
});

var NavRightLinks = React.createClass({
    getInitialState: function() {
        return {
            links: [
                {title: 'API Docs', url: '/docs'}
            ]
        };
    },
    render: function() {
        var links = this.state.links.map(function(link, i) {
            return (
                <NavItem key={link.url} eventKey={link.url} href={link.url}>{link.title}</NavItem>
            )
        });
        return (
           <Nav pullRight>
                {links}
           </Nav>
        );
    }
});

var NavWrapper = React.createClass({
    render() {
        return (
            <Navbar className="navbar-material-blue-800">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Gabriel's Portfolio</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {this.props.children}
                </Navbar.Collapse>
            </Navbar>
        )
    }
});

var MainNavbar = React.createClass({
  render() {
    return (
        <NavWrapper>
            <NavLeftLinks/>
            <NavRightLinks/>
        </NavWrapper>
    );
  }
});

export default MainNavbar;
