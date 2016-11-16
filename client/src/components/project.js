import React from 'react';

import Config from '../config/config';

class ProjectData extends React.Component {
    constructor(props) {
      super(props);
      this.loadProjectsFromServer = this.loadProjectsFromServer.bind(this);
      this.state = { data: [], loaded: false, failedToLoad: false };
    }
    componentDidMount() {
      this.loadProjectsFromServer();
    }
    loadProjectsFromServer() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        success: function(response) {
          this.setState({data: response.results, loaded: true});
        }.bind(this),
        error: function(xhr, status, error) {
          this.setState({loaded: true, failedToLoad: true});
          console.error(this.props.url, status, error.toString());
        }.bind(this)
      });
    }
    render() {
      return (
        <div className="projects">
          <ProjectList data={this.state.data} />
        </div>
      )
    }
};

class ProjectList extends React.Component {
  render() {
    let projectList = this.props.data.map((project) => {
      return (
        <ProjectItem
          key={project.id} />
      )
    });
    return (
      <div className="project-list">
        {projectList}
      </div>
    );
  }
};

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return null;
  }
};

class Project extends React.Component {
  render() {
    return (
      <div className="projects">
        <h1 className="centered">Project Page</h1>
        <ProjectData url={`${Config.Api}/api/projects`}
      </div>
    );
  }
};

export default Project;
