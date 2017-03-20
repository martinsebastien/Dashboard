import React, { Component } from 'react';
import LoginButton from './LoginButton';

export default class NavBar extends Component {

  constructor(){
    super();
    barStyle = {
      background: 'rgba(0,0,0,0.9)',
      width: '100%',
      height: '50px',
      color: 'white',
      boxShadow: '0 0 10px 4px rgba(0,0,0,0.15)',
    };
  }

  render() {
    return (
      <div style={barStyle}>
        <LoginButton/>
      </div>
    );
  }

}
