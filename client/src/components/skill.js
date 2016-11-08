import React from 'react';
import Parallax from 'react-parallax'

import ProgrammingLanguages from './skills/programmingLanguages';
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
}

var ProgrammingLanguageHeader = React.createClass({
    render() {
        return (
            <Parallax bgImage="/static/assets/img/pg_lang_bg.jpg" bgHeight="600px" bgWidth="100%">
                <h1 style={styles.headerText}>Programming Languages</h1>
            </Parallax>
        )
    }
});

var Skill = React.createClass({
  render() {
    return (
      <div id="skills" style={styles.headerBox}>
        <ProgrammingLanguageHeader />
        <ProgrammingLanguages url={Config.API + "/api/skills/?skill_type=pl"} />
      </div>
    );
  }
});

export default Skill;