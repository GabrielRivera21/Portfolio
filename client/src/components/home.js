import React from 'react';
import Profile from './profile';
import FlipCard from 'react-flipcard';

import TECH_DATA from '../constants/tech-data';

let styles = {
    linkText: {
       color: "#1565c0"
    },
    card: {
      height: "200px",
      width: "100%",
      marginBottom: "30px"
    },
    cardGrid: {
      marginBottom: "15px",
    },
    providerLogoFront: {
      height: "200px",
      width: "100%"
    },
    providerLogoBack: {
      height: "80px",
      width: "100%"
    }
};


class Header extends React.Component {
    render() {
        return (
            <Profile />
        )
    }
};

class Content extends React.Component{
    render() {
      return (
        <div className="container">
          <TechnologyData data={TECH_DATA.tech}/>
        </div>
      );
    }
};

class TechnologyData extends React.Component {
    render() {
        var technologyList = this.props.data.map(function(tech, i){
              return (
                    <div key={tech.title} className="col-sm-6 col-md-6 col-lg-4">
                        <TechnologyCard
                            title={tech.title}
                            link={tech.link}
                            for={tech.for}
                            image={tech.image} />
                    </div>
              );
            });
        return (
          <div className="techUsed">
            <h1 className="centered">Technology Used to Create this Website</h1>
            <div style={styles.cardGrid} className="row">
               {technologyList}
            </div>
          </div>
        );
    }
};

class TechnologyCard extends React.Component {
    render() {
        return (
          <div style={styles.card}>
            <FlipCard>
              <FrontCardTechUsed image={this.props.image} />
              <BackCardTechUsed link={this.props.link}
                    title={this.props.title}
                    for={this.props.for}
                    image={this.props.image} />
            </FlipCard>
          </div>
        );
    }
};

class FrontCardTechUsed extends React.Component {
    render() {
      return (
        <div style={styles.card} className="card">
          <img style={styles.providerLogoFront} src={this.props.image} />
        </div>
      );
    }
};

class BackCardTechUsed extends React.Component {
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
};

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
};

export default Home;
