import React, { Component } from 'react';

import { Projects } from '../api/projects.js';

export default class CreateProject extends Component {

  constructor(){
    super();
    styles = {
      newTask: {
        display: 'inline-block',
        maxWidth: '390px',
      },
      inputField: {
        width: '80%',
        height: '25px',
        border: 'none',
        background: 'rgba(0,0,0,0.1)',
      },
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

  render() {
    return (
      <form className="newTask" onSubmit={this.handleSubmit.bind(this)} >
        <input
          type="text"
          ref="titleInput"
          placeholder="Type the title of the project"
          className="inputField"
        />
        <input
          type="text"
          ref="descriptionInput"
          placeholder="Type to add a description"
          className="inputField"
        />
        <input type="submit" className="submitField" />
      </form>
    );
  }

}
