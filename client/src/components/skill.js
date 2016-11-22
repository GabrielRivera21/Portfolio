import React from 'react';
import Parallax from 'react-parallax'
import { Modal, Button } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component'
import Spinner from 'react-spinkit';

import Config from '../config/config';

let styles = {
    headerBox: {
         margin: "-20px 0% 1% 0%"
    },
    headerText: {
        marginTop: 120,
        marginBottom: 100,
        textAlign: "center",
        color: "white",
        fontSize: 50
    },
    listLoader: {
        marginTop: 60
    },
    card: {
      height: 180,
      width: "100%",
      paddingLeft: "10px"
    },
    star: {
        fontSize: 25
    },
    skillLevel: {
        fontSize: 20
    }
};

class ParallaxHeader extends React.Component {
    render() {
        return (
            <Parallax bgImage={this.props.image} bgHeight="600px" bgWidth="100%">
                <h1 style={styles.headerText}>{this.props.title}</h1>
            </Parallax>
        );
    }
};

class SkillData extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false, data: [], failedToLoad: false };
    }
    loadSkillsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(response) {
                this.setState({loaded: true, data: response.results})
            }.bind(this),
            error: function(xhr, status, error) {
                this.setState({loaded: true, failedToLoad: true})
                console.error(this.props.url, status, error.toString());
            }.bind(this)
        });
    }
    componentDidMount() {
        this.loadSkillsFromServer();
    }
    render() {
        let displaySkills;
        let loader = this.state.loaded ? null : <Spinner spinnerName="circle" className="centered" noFadeIn />

        if(this.state.failedToLoad) {
          displaySkills = <h3 className="centered">Failed to load Skills</h3>;
        } else {
          displaySkills = <SkillList data={this.state.data} />;
        }

        return (
            <div className="program-languages">
                <div className="empty-large-block">
                  {loader}
                  {displaySkills}
                </div>
            </div>
        );
    }
};

class SkillList extends React.Component {
    render() {
        let skillItemList = this.props.data.map(function(skill) {
                return (
                    <SkillItem
                        key={skill.id}
                        id={skill.id}
                        name={skill.name}
                        proficiency_level={skill.proficiency_level}
                        description={skill.description}>
                            {skill.projects}
                    </SkillItem>
                );
            });
        return (
            <div className="skillItemList container">
                {skillItemList.length > 0 ? skillItemList : <h3 className="centered">There are no skills to display</h3>}
            </div>
        );
    }
};

class SkillItem extends React.Component {
    showSkillLevelName(proficiency_level) {
        if (proficiency_level == 1) return 'Familiar';
        if (proficiency_level == 2) return 'Novice';
        if (proficiency_level == 3) return 'Proficient';
        if (proficiency_level == 4) return 'Advanced';
        if (proficiency_level == 5) return 'Expert';
        return 'None'
    }
    render() {
        return (
            <div className="skillItem col-sm-6 col-md-6 col-lg-4">
                <div style={styles.card} className="card-panel" onClick={this.showSkillDetails}>
                    <h2>{this.props.name}</h2>
                    <div style={styles.star}>
                        <StarRatingComponent
                            name="proficiency_level"
                            value={this.props.proficiency_level}
                            editing={false} />
                    </div>
                    <p style={styles.skillLevel}>Skill level: {this.showSkillLevelName(this.props.proficiency_level)}</p>
                </div>
            </div>
        );
    }
};

class Skill extends React.Component {
    render() {
        return (
          <div id="skills" style={styles.headerBox}>
            <ParallaxHeader image="/static/assets/img/pg_lang_bg.jpg" title="Programming Languages"/>
            <SkillData url={Config.API + "/api/skills/?skill_type=pl"} />
            <ParallaxHeader image="/static/assets/img/st_land_bg.jpg" title="Software Tools" />
            <SkillData url={Config.API + "/api/skills/?skill_type=st"} />
            <ParallaxHeader image="/static/assets/img/frameworks_bg.jpg" title="Frameworks and Platforms" />
            <SkillData url={Config.API + "/api/skills/?skill_type=fr"} />
            <ParallaxHeader image="/static/assets/img/deployments_bg.jpg" title="Deployment Environments"/>
            <SkillData url={Config.API + "/api/skills/?skill_type=dp"} />
          </div>
        );
    }
};

export default Skill;
