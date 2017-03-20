import React, { Component, PropTypes } from 'react';
import { MdDelete, MdEdit, MdDone } from 'react-icons/lib/md';

import { Projects } from '../api/projects';

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
        fontWeight: '300',
      },
      statutDoing: {
        color: 'rgb(255,80,80)',
        fontWeight: '300',
      },
      description: {
        fontWeight: '300',
        textAlign: 'left',
      },
      delete: {
        cursor: 'pointer',
        color: 'red',
      },
      done: {
        cursor: 'pointer',
        color: 'lawngreen',
      },
    };
  }

  toggleFinished() {
    Projects.update(this.props.project._id, {
      $set: { status: !this.props.project.status },
    });
  }

  deleteProject() {
    confirm('Voulez-vous vraiment supprimer ce projet ?') ? Projects.remove(this.props.project._id) : null;
  }

  render() {
    const projectClassName = this.props.project.status ? 'finished' : 'wip';
    return (
      <div style={styles.box}>
        <h1 style={styles.title}>{this.props.project.title}</h1>
        <p style={styles.statutFinish} className={projectClassName}>{this.props.project.status ? 'Terminé' : 'En cours'}</p>
        <p style={styles.description}>{this.props.project.description}</p>
        <MdDelete style={styles.delete} onClick={this.deleteProject.bind(this)} />
        <MdDone style={styles.done} onClick={this.toggleFinished.bind(this)} />
      </div>
    );
  }

}

ProjectBox.propTypes = {
  project: PropTypes.object.isRequired,
}
