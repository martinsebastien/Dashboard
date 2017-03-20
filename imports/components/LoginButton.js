import React, { Component } from 'react';

export default class LoginButton extends Component {

  constructor(){
    super();
    buttonStyle = {
      background: 'rgba(255,255,255,0.9)',
      padding: '5px 10px 5px 10px',
      margin: '10px 0 0 17.5px',
      borderRadius: '5px',
      display: 'inline-block',
      textTransform: 'uppercase',
      color: 'rgba(0,0,0,0.8)',
      fontFamily: '"Work Sans", sans-serif',
      fontWeight: '700',
      boxShadow: '0 0 10 rgba(0,0,0,0.15)',
      transition: 'all 0.4s',
      cursor: 'pointer',
    };
  }

  render() {
    return (
      <div className="buttonLogin" style={buttonStyle}>
        login
      </div>
    );
  }

}
