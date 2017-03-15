import React, { Component } from 'react';

export default class CreateProject extends Component {

  constructor(){
    super();
    styles = {
      box: {
        padding: '20px',
        margin: '5px',
        fontFamily: '"Work Sans", sans-serif',
        boxShadow: '0 0 10px rgba(0,0,0,0.15)',
        display: 'inline-block',
        cursor: 'pointer',
        verticalAlign: 'top',
        color: 'white',
        backgroundColor: 'green',
        borderRadius: '60',
      },
    };
  }

  createProject(e){
    e.preventDefault();
    console.log('Clicked');
  }

  render() {
    return (
      <div style={styles.box} onClick={this.createProject}>
        Create a project
      </div>
    );
  }

}
