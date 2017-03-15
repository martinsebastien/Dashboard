import React, { Component } from 'react';
import LoginButton from './LoginButton';

export default class NavBar extends Component {

  constructor(){
    super();
    barStyle = {
      background: 'linear-gradient(45deg, #3F51B5 0%,#2196F3 100%)',
      width: '100%',
      height: '50',
      color: 'white',
      boxShadow: '0 0 10px rgba(0,0,0,0.15)',
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
