// IMPORT FILES
require('../assets/images/favicon.ico');

// IMPORT STYLE
import './style.scss';  // import main SASS FILE

// IMPORT JS LIBRARIES
import _ from 'lodash';
import { loadParticles } from '../assets/javascript/scripts/init_particles.js'

// IMPORT JS PLUGINS
// IMPORT OTHER JS SCRIPTS

// DEVELOPMENT MODE?
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// RUN FUNCTIONS
document.addEventListener("DOMContentLoaded", function () {
  loadParticles();
});

console.log('hello from webpacker!');
