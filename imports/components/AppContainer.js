import { createContainer } from 'meteor/react-meteor-data';

import { Projects } from '../api/projects'

import App from './App';

export default createContainer(() => {
  return {
    projects: Projects.find({}).fetch(),
  };
}, App);
