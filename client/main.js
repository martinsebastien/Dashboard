import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import './main.html';

import AppContainer from '../imports/components/AppContainer';

Meteor.startup(() => {
  render(<AppContainer />, document.getElementById('app'))
});
