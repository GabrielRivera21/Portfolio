import React from 'react';
import { Jumbotron } from 'react-bootstrap';

let styles = {
    block: {
        margin: "-20px 0% 1% 0%"
    },
    profile_pic: {
        width: "175px",
        height: "156px",
        marginBottom: "10px"
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
};

var ProfileInfo = React.createClass({
    render() {
      return (
        <ul style={styles.flexBox}>
          <li>Role: Software Engineer</li>
          <li>Email: gabriel.rivera2192@gmail.com</li>
          <li>Github: GabrielRivera21</li>
          <li>Twitter: @griveraper</li>
        </ul>
      );
    }
});

var Profile = React.createClass({
    render() {
        return (
          <Jumbotron style={styles.block}>
              <div className="container">
                  <h2>Gabriel Rivera Per-ossenkopp</h2>
                  <hr/>
                  <ProfileInfo/>
                  <div className="col-md-3 centered">
                      <img style={styles.profile_pic} src="/static/assets/img/profile_pic.jpg" alt="profile_pic"/>
                  </div>
                  <div className="col-md-9">
                      <div id="welcome_text">
                          <p>
                            Welcome to my Portfolio Page.
                            Here you will be able to see my skill set and projects that
                            I've worked on, both personally and those that I did for my employers, that
                            I have permission to show.
                          </p>
                      </div>
                      <div className="centered">
                          <button className="btn btn-lg btn-material-blue-800">Contact Me</button>
                      </div>

                  </div>
              </div>
          </Jumbotron>
        );
    }
});

export default Profile;
