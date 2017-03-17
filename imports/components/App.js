import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import { Projects } from '../api/projects.js';

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
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    const title = this.refs.titleInput.value.trim();
    const description = this.refs.descriptionInput.value.trim();

    Projects.insert({
      title,
      description,
      status: false,
    });

    this.refs.titleInput.value = '';
    this.refs.descriptionInput.value = '';
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
        </div>

        <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            ref="titleInput"
            placeholder="Type the title of the project"
          />
          <input
            type="text"
            ref="descriptionInput"
            placeholder="Type to add a description"
          />
          <input type="submit"/>
        </form>

      </div>
    );
  }

}

App.propTypes = {
  projects: PropTypes.array.isRequired,
};
