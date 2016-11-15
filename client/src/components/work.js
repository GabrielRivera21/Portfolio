import React from 'react';
import Spinner from 'react-spinkit';
import GoogleMap from 'google-map-react';
import moment from 'moment';

import Config from '../config/config';

const MARKER_WIDTH = 49;
const MARKERT_HEIGHT = 64;
const MARKER_ORIGIN_X = MARKER_WIDTH * .5;
const MARKER_ORIGIN_Y = MARKERT_HEIGHT;

let styles = {
  workCard: {
    width: "100%"
  },
  workDetails: {
    margin: 10
  },
  workEmployer: {
    color: "#1565c0"
  },
  workEmployerLogo: {
    maxWidth: 70,
    maxheight: 70
  },
  workDates: {
    marginBottom: 10,
    fontStyle: "italic",
    color: "#90908f"
  },
  workMap: {
    height: 250,
    margin: "10px"
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
  }
};

class WorkData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, data: [], failedToLoad: false };
  }
  loadWorkDataFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(response) {
        this.setState({loaded: true, data: response.results});
      }.bind(this),
      error: function(xhr, status, error) {
        this.setState({loaded: true, failedToLoad: true});
        console.error(this.props.url, status, error.toString());
      }.bind(this)
    });
  }
  componentDidMount() {
    this.loadWorkDataFromServer();
  }
  render() {
    let displayWorkExperience;
    let loader = this.state.loaded ? null : <Spinner spinnerName="circle" className="centered" noFadeIn />

    if(this.state.failedToLoad) {
      displayWorkExperience = <h3 className="centered">Failed to load Work Experience</h3>;
    } else {
      displayWorkExperience = <WorkExperienceList data={this.state.data} />;
    }

    return (
      <div className="workExperienceList">
        {loader}
        {displayWorkExperience}
      </div>
    );
  }
};

class WorkExperienceList extends React.Component {
  render() {
    let workList = this.props.data.map(function(workExperience) {
        return (
            <WorkExperienceItem
                key={workExperience.id}
                employer={workExperience.employer}
                employer_logo={workExperience.employer_logo}
                position={workExperience.position}
                from_date={workExperience.from_date}
                to_date={workExperience.to_date}
                currently_working={workExperience.currently_working}
                description={workExperience.description}
                address={workExperience.address}
                latitude={workExperience.latitude}
                longitude={workExperience.longitude} />
        );
      });
    return (
      <div className="workExperienceList container">
        {workList.length > 0 ? workList : <h3 className="centered">There are no Work Experiences to display</h3>}
      </div>
    );
  }
}

class WorkExperienceItem extends React.Component {
  render() {
    return (
      <div style={styles.workCard} className="work-entry card-panel-no-hover">
        <div className="row">
          <div className="col-md-6">
            <WorkDetail
              employer={this.props.employer}
              employer_logo={this.props.employer_logo}
              position={this.props.position}
              from_date={this.props.from_date}
              to_date={this.props.to_date}
              currently_working={this.props.currently_working}
              description={this.props.description} />
          </div>
          <div className="col-md-6">
            <WorkMap
              employer={this.props.employer}
              address={this.props.address}
              latitude={this.props.latitude}
              longitude={this.props.longitude} />
          </div>
        </div>
      </div>
    );
  }
}

class WorkDetail extends React.Component {
  formatWorkDate(date) {
    if(!date) return null;
    return moment(date).format("MMMM YYYY");
  }
  render() {
    let employerLogo;
    let description = this.props.description.replace(/(?:\r\n|\r|\n)/g, '<br/><br/>');
    let from_date = this.formatWorkDate(this.props.from_date);
    let to_date = this.formatWorkDate(this.props.to_date);

    if(this.props.employer_logo) {
      employerLogo = <img
                        style={styles.workEmployerLogo}
                        className="employer-logo pull-right"
                        src={this.props.employer_logo} alt="Logo"/>;
    }

    return (
      <div style={styles.workDetails} className="work-detail">
        {employerLogo}
        <h2 style={styles.workEmployer} className="employer">{this.props.employer} | {this.props.position}</h2>
        <h5 style={styles.workDates} className="work-dates">
          {from_date} - {this.props.currently_working ? 'Currently Working here' : to_date}
        </h5>
        <p className="work-description" dangerouslySetInnerHTML={{__html: description}}></p>
      </div>
    );
  }
};

class WorkMap extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let workLatitude = parseFloat(this.props.latitude);
    let workLongitude = parseFloat(this.props.longitude);

    return (
      <div style={styles.workMap} className="work-map">
        <GoogleMap
           defaultCenter={[workLatitude, workLongitude]}
           defaultZoom={6}>
             <div style={styles.markerStyle} lat={this.props.latitude} lng={this.props.longitude}>
             </div>
        </GoogleMap>
      </div>
    );
  }
};

class Work extends React.Component {
  render() {
    return (
      <div id="workExperience">
        <h1 className="centered">Work Experience</h1>
        <WorkData url={Config.API + '/api/work'} />
      </div>
    );
  }
};

export default Work;
