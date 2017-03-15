import React, { Component } from 'react';

export default class ProjectBox extends Component {

  constructor(){
    super();
    styles = {
      box: {
        width: '25%',
        maxWidth: '450',
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
      statut: {
        color: '#64DD17',
        fontWeight: '300',
      },
      description: {
        fontWeight: '300',
      }
    };
  }

  render() {
    return (
      <div style={styles.box}>
        <h1 style={styles.title}>Projet Dashboard</h1>
        <p style={styles.statut}>En cours</p>
        <p style={styles.description}>Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat.</p>
      </div>
    );
  }

}
