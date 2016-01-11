import React from 'react';
import Profile from './profile';
import FlipCard from 'react-flipcard';

let styles = {
    linkText: {
       color: "#1565c0"
    },
    card: {
      height: "200px",
      width: "300px",
      margin: "15px"
    },
    cardGrid: {
      margin: "30px"
    },
    providerLogoFront: {
      height: "200px",
      width: "300px"
    },
    providerLogoBack: {
      height: "80px",
      width: "300px"
    }
};

var Content = React.createClass({
    render() {
      return (
        <div className="container">
          <TechnologyUsed />
        </div>
      );
    }
});


var Header = React.createClass({
    render() {
        return (
            <Profile />
        )
    }
});

var TechnologyUsed = React.createClass({
    getInitialState() {
        return {
          tech: [
            {
              title: "Python",
              link: "https://python.org",
              for: "Code the Backend",
              image: "/static/assets/img/python.png"
            },
            {
              title: "Django",
              link: "https://www.djangoproject.com/",
              for: "Backend",
              image: "/static/assets/img/django.png"
            },
            {
              title: "React",
              link: "https://facebook.github.io/react/",
              for: "Frontend",
              image: "/static/assets/img/react.jpg"
            },
            {
              title: "Django Rest Framework",
              link: "http://www.django-rest-framework.org",
              for: "REST API",
              image:"/static/assets/img/django-rest.png"
            },
            {
              title: "Heroku",
              link: "https://heroku.com",
              for: "Hosting",
              image: "/static/assets/img/heroku.png"
            },
            {
              title: "Postgres DB",
              link: "http://www.postgresql.org/",
              for: "Database",
              image: "/static/assets/img/postgresql.jpg"
            },
            {
              title: "npm",
              link: "https://www.npmjs.com/",
              for: "build and watch",
              image: "/static/assets/img/npm-logo.svg"
            },
            {
              title: "Webpack",
              link: "https://webpack.github.io/",
              for: "build",
              image: "/static/assets/img/webpack.jpg"
            },
            {
              title: "Bootstrap",
              link: "https://getbootstrap.com",
              for: "CSS Framework",
              image: "/static/assets/img/bootstrap.jpg"
            },
          ]
        }
    },
    render() {
      var technology = this.state.tech.map(function(tech, i){
          return (
            <div key={tech.title} className="col-sm-4">
              <div style={styles.card}>
                <FlipCard>
                  <FrontCardTechUsed image={tech.image} />
                  <BackCardTechUsed link={tech.link}
                        title={tech.title}
                        for={tech.for}
                        image={tech.image} />
                </FlipCard>
              </div>
            </div>
          )
      });
      return (
        <div className="techUsed">
          <h1 className="centered">Technology Used to Create this Website</h1>
          <div style={styles.cardGrid} className="row">
             {technology}
          </div>
        </div>
      );
    }
});

var FrontCardTechUsed = React.createClass({
    render() {
      return (
        <div style={styles.card} className="card">
          <img style={styles.providerLogoFront} src={this.props.image} />
        </div>
      );
    }
});

var BackCardTechUsed = React.createClass({
    render() {
        return (
          <div style={styles.card} className="card centered">
            <img style={styles.providerLogoBack} src={this.props.image} />
            <h3>
              <a style={styles.linkText} target="_blank" href={this.props.link}>
                {this.props.title}
              </a>
            </h3>
            <p>This technology was used for: </p>
            <p>{this.props.for}</p>
          </div>
        );
    }
});

var Home = React.createClass({
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
});

export default Home;
