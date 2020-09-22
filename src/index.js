// IMPORT JS LIBRARIES
import _ from 'lodash';
const path = require('path');

// IMPORT FILES

// IMPORT STYLE
import './style.scss';  // import main SASS FILE


// IMPORT JS PLUGINS
// IMPORT OTHER JS SCRIPTS
import { headerToggle } from '../assets/javascript/scripts/navigation/header.js';
import { resumeModal } from '../assets/javascript/scripts/resume/modal.js';
import {  output as projectActions } from '../assets/javascript/scripts/portfolio/project.js';

// DEVELOPMENT MODE?
if (process.env.NODE_ENV !== 'production') {
  console.log('looks like we are in development mode!');
}

// RUN FUNCTIONS
document.addEventListener("DOMContentLoaded", function () {
  headerToggle();
  
  resumeModal();
  projectActions();
});

console.log('hello from webpacker!');
