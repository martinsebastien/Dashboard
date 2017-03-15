import React, { Component } from 'react';
import NavBar from './NavBar';
import ProjectBox from './ProjectBox';
import CreateProject from './CreateProject';

export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        <ProjectBox/>
        <CreateProject/>
      </div>
    );
  }

}
