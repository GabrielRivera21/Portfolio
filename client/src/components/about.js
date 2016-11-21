import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import GoogleMap from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';

import Config from '../config/config';

const MARKER_WIDTH = 49;
const MARKERT_HEIGHT = 64;
const MARKER_ORIGIN_X = MARKER_WIDTH * .5;
const MARKER_ORIGIN_Y = MARKERT_HEIGHT;

let styles = {
  block: {
      margin: "-20px 0% 1% 0%"
  },
  travelMap: {
    height: 350,
    width: "70%",
    marginBottom: 120
  },
  markerStyle: {
    backgroundImage: 'url("/static/assets/img/mapIcon.svg")',
    position: 'absolute',
    width: MARKER_WIDTH,
    height: MARKERT_HEIGHT,
    left: -MARKER_ORIGIN_X,
    top: -MARKER_ORIGIN_Y,
    transformOrigin: `${MARKER_ORIGIN_X} ${MARKER_ORIGIN_Y}`,
    margin: 0,
    padding: 0
  },
  markerText: {
    fontStyle: "bold"
  }
};

class AboutMe extends React.Component {
  render() {
    return (
      <Jumbotron style={styles.block} className="aboutMe">
        <div className="aboutMeContent container">
          <h2>About Me</h2>
          <p>
            I am a Puerto Rican Software Engineer currently living in the San Francisco
            Bay area. I have developed a passion for creating software ever since I
            discovered how to code during college and attained a bachelors degree in
            Computer Science and started working in the software development industry while
            I was still in college.
          </p>
          <h3>Hobbies</h3>
          <p>
            Some of my hobbies are just to watch Netflix, Adventuring the outdoors, Roadtrips,
            watching Anime, playing video games and hanging out at bars with friends.
          </p>
        </div>
      </Jumbotron>
    );
  }
};

class TravelledMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          name: "Puerto Rico",
          lat: 18.45,
          lng: -66.0667
        },
        {
          name: "Ohio",
          lat: 39.175300,
          lng: -84.294400
        },
        {
          name: "San Francisco",
          lat: 37.787999,
          lng: -122.399400
        },
        {
          name: "Orlando, Florida",
          lat: 28.5383,
          lng: -81.3792
        },
        {
          name: "New York",
          lat: 40.7128,
          lng: -74.0059
        },
        {
          name: "Los Angeles",
          lat: 34.0522,
          lng: -118.2437
        }
      ]
    };
  }
  render() {
    let markers = this.state.markers.map((location, index) => {
        return (
           <div key={index} style={styles.markerStyle}
             lat={location.lat} lng={location.lng}>
              <p style={styles.markerText}>{location.name}</p>
           </div>
        );
      });
    return (
      <div style={styles.travelMap} className="map-travelled container centered">
        <h2>Where I have Travelled</h2>
        <GoogleMap
           bootstrapURLKeys={{ key: Config.GM_API_KEY, language: 'en'}}
           defaultCenter={[37.0902, -95.7129]}
           defaultZoom={3}>
            {markers}
        </GoogleMap>
      </div>
    );
  }
};

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <AboutMe />
        <TravelledMap />
      </div>
    );
  }
};

export default About;
