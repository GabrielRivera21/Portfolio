import React from 'react';
import Spinner from 'react-spinkit';
import ImageGallery from 'react-image-gallery';

import Config from '../config/config';

let styles = {
  projectImages: {
    height: 200,
    width: 200
  }
}
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
        )
      });
    return (
      <div className="project-list">
        {projectList.length > 0 ? projectList : <h3 className="centered">There are no Projects to display</h3>}
      </div>
    );
  }
};

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
  }
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
  constructor(props) {
    super(props);
    this.onImageLoadHandler = this.onImageLoadHandler.bind(this);
  }
  onImageLoadHandler(event) {
    console.log('Images loaded', event.target);
  }
  render() {
    let projectImages = [this.props.featured_image, ...this.props.extra_images];
    let images = projectImages.map((image) => {
      let imageUrl = image;
      if(imageUrl.startsWith('/media')) {
        imageUrl = `${Config.API}${image}`;
      }
      return {
          original: imageUrl,
          thumbnail: imageUrl,
          originalClass: 'img-responsive',
          thumbnailClass: 'img-responsive'
        };
    });
    return (
      <div className="project-images">
        <ImageGallery
          items={images}
          slideInterval={3000}
          onImageLoad={this.onImageLoadHandler} />
      </div>
    );
  }
};

class ProjectDetail extends React.Component {
  render() {
    return (
      <div className="project-details">
        <h2>{this.props.title}</h2>
        {this.props.work_exp ? <h4>From: {this.props.work_exp}</h4> : null}
        {this.props.github_url ? <h5>Github: {this.props.github_url}</h5> : null}
        {this.props.project_url ? <h5>Project: {this.props.project_url}</h5> : null}
        <p>{this.props.description}</p>
      </div>
    );
  }
};

class Project extends React.Component {
  render() {
    return (
      <div className="projects">
        <h1 className="centered">Project Page</h1>
        <ProjectData url={`${Config.API}/api/projects`} />
      </div>
    );
  }
};

export default Project;
