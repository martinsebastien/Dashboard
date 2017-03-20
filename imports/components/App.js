import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Container from './AppContainer';
import NavBar from './NavBar';
import ProjectBox from './ProjectBox';
import CreateProject from './CreateProject';

export default class App extends Component {

  constructor(){
    super();
    containerProject = {
      textAlign: 'center',
      width: '100%',
      marginTop: '20px',
    };
  }

  renderProjects(){
    return this.props.projects.map((project) => (
          <ProjectBox key={project._id} project={project} />
    ));

  }

  render() {
    return (
      <div>
        <NavBar/>
        <div style={containerProject}>
          {this.renderProjects()}
          <CreateProject />
        </div>
      </div>
    );
  }

}

App.propTypes = {
  projects: PropTypes.array.isRequired,
};
