import React from 'react';

import StarRatingComponent from 'react-star-rating-component'
import Loader from 'react-loader';

let styles = {
    listLoader: {
        marginTop: 60
    },
    card: {
      height: "127px",
      width: "100%",
      paddingLeft: "10px"
    },
    star: {
        fontSize: 30
    },
}

var ProgrammingLanguages = React.createClass({
    getInitialState() {
        return {loaded: false, data: []}
    },
    loadSkillsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: true,
            success: function(response) {
                this.setState({loaded: true, data: response.results})
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
                <Loader loaded={this.state.loaded} />
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
                    proficiency_level={progLang.proficiency_level}
                    description={progLang.description}>
                        {progLang.projects}
                </ProgrammingLanguageItem>
            );
        });
        return (
            <div className="programmingLanguagesList container">
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
                <div style={styles.card} className="card-panel">
                    <h1>{this.props.name}</h1>
                    <div style={styles.star}>
                        <StarRatingComponent
                            name="proficiency_level"
                            value={this.props.proficiency_level}
                            editing={false}
                            />
                    </div>
                    <div className="projects">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
});

export default ProgrammingLanguages;