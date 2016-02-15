import React from 'react';
import Parallax from 'react-parallax'

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
    }
}
var Header = React.createClass({
    render() {
        return (
            <Parallax bgImage="/static/assets/img/pg_lang_bg.jpg" bgHeight="600px" bgWidth="100%">
                <h1 style={styles.headerText}>Programming Languages</h1>
            </Parallax>
        )
    }
});

var ProgrammingLanguages = React.createClass({
    getInitialState() {
        return {data: []}
    },
    loadSkillsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: true,
            success: function(response) {
                this.setState({data: response.results})
            }.bind(this),
            error: function(xhr, status, error) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount() {
        this.loadSkillsFromServer();
    },
    render() {
        return (
            <div className="program-languages">
                <ProgrammingLanguagesList data={this.state.data} />
            </div>
        );
    }
});

var ProgrammingLanguagesList = React.createClass({
    render() {
        var programLangItemList = this.props.data.map(function(progLang) {
            return (
                <ProgrammingLanguageItem
                    key={progLang.id}
                    id={progLang.id}
                    name={progLang.name}
                    description={progLang.description}>
                        {progLang.projects}
                </ProgrammingLanguageItem>
            );
        });
        return (
            <div className="programmingLanguagesList">
                {programLangItemList}
            </div>
        );
    }
});

var ProgrammingLanguageItem = React.createClass({
    render() {
        var skillId = this.props.id;
        return (
            <div className="progLangItem col-sm-6 col-md-6 col-lg-4">
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <a className="btn btn-small btn-primary" href={"/api/skills/" + skillId}>View</a>
                <div className="projects">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

var Skill = React.createClass({
  render() {
    return (
      <div id="skills" style={styles.headerBox}>
        <Header />
        <ProgrammingLanguages url="/api/skills/?skill_type=pl" />
      </div>
    );
  }
});

export default Skill;