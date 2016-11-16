import React from 'react';
import { Jumbotron } from 'react-bootstrap';

let styles = {
    block: {
        margin: "-20px 0% 1% 0%"
    },
    profilePic: {
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

class ProfileInfo extends React.Component {
    render() {
      return (
        <ul style={styles.flexBox}>
          <li className="centered"><b>Role:</b> Software Engineer</li>
          <li className="centered"><b>Email:</b> gabriel.rivera2192@gmail.com</li>
          <li className="centered"><b>Github:</b> GabrielRivera21</li>
          <li className="centered"><b>Twitter:</b> @grivera021</li>
        </ul>
      );
    }
};

class ProfileImage extends React.Component {
  render() {
    return (
        <img style={styles.profilePic} src="/static/assets/img/profile_pic.jpg" alt="profile_pic"/>
    )
  }
}

class ProfileDetails extends React.Component {
  render() {
    return (
      <div id="welcome_text" className="centered">
          <p>
            Welcome to my Portfolio Page.
            Here you will be able to see my skill set and projects that
            I have worked on, both personally and those that I did for my employers,
            that I have permission to show.
          </p>
          <button className="btn btn-lg btn-material-blue-800">Contact Me</button>
      </div>
    );
  }
};

class Profile extends React.Component {
    render() {
        return (
          <Jumbotron style={styles.block}>
              <div className="container">
                  <h2>Gabriel Rivera Per-ossenkopp</h2>
                  <hr/>
                  <ProfileInfo/>
                  <div className="col-md-3 centered">
                    <ProfileImage />
                  </div>
                  <div className="col-md-9">
                    <ProfileDetails />
                  </div>
              </div>
          </Jumbotron>
        );
    }
};

export default Profile;
