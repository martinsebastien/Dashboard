import React, { Component, PropTypes } from 'react';

export default class ProjectBox extends Component {

  constructor(){
    super();
    styles = {
      box: {
        width: '25%',
        maxWidth: '450px',
        minWidth: '310px',
        padding: '20px',
        margin: '5px',
        fontFamily: '"Work Sans", sans-serif',
        boxShadow: '0 0 10px rgba(0,0,0,0.15)',
        display: 'inline-block',
      },
      title: {
        fontSize: '24px',
        textTransform: 'uppercase',
      },
      statutFinish: {
        color: '#64DD17',
        fontWeight: '300',
      },
      statutDoing: {
        color: 'rgb(255,80,80)',
        fontWeight: '300',
      },
      description: {
        fontWeight: '300',
        textAlign: 'left',
      }
    };
  }

  render() {
    return (
      <div style={styles.box}>
        <h1 style={styles.title}>{this.props.project.title}</h1>
        <p style={styles.statutFinish}>{this.props.project.status}</p>
        <p style={styles.description}>{this.props.project.description}</p>
      </div>
    );
  }

}

ProjectBox.propTypes = {
  project: PropTypes.object.isRequired,
}
