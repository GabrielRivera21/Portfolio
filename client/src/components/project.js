import React from 'react';
import Spinner from 'react-spinkit';
import { Carousel } from 'react-bootstrap';

let styles = {
  projectDetails: {
    margin: 10
  }
}

class ProjectData extends React.Component {
    constructor(props) {
      super(props);
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
      let displayProjects;
      let loader = this.state.loaded ? null : <Spinner spinnerName="circle" className="centered" noFadeIn />

      if(this.state.failedToLoad) {
        displayProjects = <h3 className="centered">Failed to load Projects</h3>;
      } else {
        displayProjects = <ProjectList data={this.state.data} />;
      }

      return (
        <div className="projects">
          {loader}
          {displayProjects}
        </div>
      )
    }
};

class ProjectList extends React.Component {
  render() {
    let projectList = this.props.data.map((project) => {
        return (
          <ProjectItem
            key={project.id}
            title={project.title}
            work_exp={project.work_experience}
            github_url={project.github_url}
            project_url={project.url}
            description={project.description}
            featured_image={project.featured_image}
            extra_images={project.images} />
        );
      });
    return (
      <div className="project-list container">
        {projectList.length > 0 ? projectList : <h3 className="centered">There are no Projects to display</h3>}
      </div>
    );
  }
};

class ProjectItem extends React.Component {
  render() {
    return (
      <div className="project-entry card-panel-no-hover">
        <div className="row">
          <div className="col-md-6">
            <ProjectImageGallery
              featured_image={this.props.featured_image}
              extra_images={this.props.extra_images} />
          </div>
          <div className="col-md-6">
            <ProjectDetail
              title={this.props.title}
              work_exp={this.props.work_exp}
              github_url={this.props.github_url}
              project_url={this.props.project_url}
              description={this.props.description} />
          </div>
        </div>
      </div>
    );
  }
};

class ProjectImageGallery extends React.Component {
  render() {
    let projectImages = [this.props.featured_image, ...this.props.extra_images];
    let images = projectImages.map((image, index) => {
        return (
          <Carousel.Item key={index}>
            <div className="centered">
              <img className="img-responsive centered project-image" src={image} alt="project-image" />
            </div>
          </Carousel.Item>
        )
      });
    return (
      <div className="project-images">
        <Carousel>
          {images}
        </Carousel>
      </div>
    );
  }
};

class ProjectDetail extends React.Component {
  render() {
    return (
      <div style={styles.projectDetails} className="project-details">
        <h2>{this.props.title}</h2>
        {this.props.work_exp && <h4>Employer: {this.props.work_exp}</h4>}
        {this.props.github_url && <h5>Github: {this.props.github_url}</h5>}
        {this.props.project_url && <h5>Project: {this.props.project_url}</h5>}
        <p>{this.props.description}</p>
      </div>
    );
  }
};

class Project extends React.Component {
  render() {
    return (
      <div className="projects">
        <h1 className="centered">Projects</h1>
        <ProjectData url='/api/projects/' />
      </div>
    );
  }
};

export default Project;
