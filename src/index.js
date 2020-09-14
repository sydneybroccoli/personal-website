// IMPORT JS LIBRARIES
import _ from 'lodash';
const path = require('path');

// IMPORT FILES

// IMPORT STYLE
import './style.scss';  // import main SASS FILE


// IMPORT JS PLUGINS
// IMPORT OTHER JS SCRIPTS
// import { loadParticles } from '../assets/javascript/scripts/init_particles.js';
import { resumeModal } from '../assets/javascript/scripts/resumeModal.js';

// DEVELOPMENT MODE?
if (process.env.NODE_ENV !== 'production') {
  console.log('looks like we are in development mode!');
}

// RUN FUNCTIONS
document.addEventListener("DOMContentLoaded", function () {
  // loadParticles();
  resumeModal();
});

console.log('hello from webpacker!');
