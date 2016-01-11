import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap'

let styles = {
    header: {
        margin: "-20px 0% 1% 0%"
    },
    profile_pic: {
        width: "200px"
    },
    profile_text: {
        fontSize: "36px"
    },
    flexBox: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: "10px",
        listStyleType: "none",
        marginTop: "-20px",
        fontSize: "18px"
    }
}

var Content = React.createClass({
    render() {
      return (
        <div className="container">
          <Summary/>
        </div>
      );
    }
});


var Header = React.createClass({
    render: function() {
        return (
            <Jumbotron style={styles.header}>
                <div className="container">
                    <h2>Gabriel Rivera Per-ossenkopp</h2>
                    <hr/>
                    <ProfileInfo/>
                    <div className="col-md-3">
                        <img style={styles.profile_pic} src="assets/img/profile_pic.jpg" alt="profile_pic"/>
                    </div>
                    <div className="col-md-9">
                        <div style={styles.profile_text} id="profile_info">
                            <p>
                              Welcome to my Portfolio Page.
                              Here you will be able to see my skill set and projects that
                              I've worked on, both personally and those that I did for my employers, that
                              I have permission to show.
                            </p>
                        </div>
                        <Button bsStyle="material-blue-800" bsSize="large">Contact Me</Button>
                    </div>
                </div>
            </Jumbotron>
        )
    }
});

var ProfileInfo = React.createClass({
    render() {
      return (
        <ul style={styles.flexBox}>
          <li>Role: Software Engineer</li>
          <li>Email: gabriel.rivera2192@gmail.com</li>
          <li>Github: GabrielRivera21</li>
          <li>Twitter: @griveraper</li>
        </ul>
      )
    }
});

var Summary = React.createClass({
    render: function() {
        return (
              <div>
                <h1 className="centered">Summary</h1>
                <h3>Bio</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium omnis, ipsam deserunt autem iste, ullam error
                    perspiciatis totam excepturi natus dolorem, aliquid consectetur quibusdam
                    inventore fuga neque debitis eveniet voluptates.

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium omnis, ipsam deserunt autem iste, ullam error
                    perspiciatis totam excepturi natus dolorem, aliquid consectetur quibusdam
                    inventore fuga neque debitis eveniet voluptates.
                </p>
                <p>A little Bio here..</p>
              </div>
        )
    }
});

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
});

export default Home;
