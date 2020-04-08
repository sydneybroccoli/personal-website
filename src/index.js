import './style.scss';
import _ from 'lodash';

// IMPORT LIBRARIES
import { loadParticles } from '../assets/javascript/scripts/init_particles.js'


// IMPORT PLUGINS
// IMPORT OTHER SCRIPTS

// DEVELOPMENT MODE?
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// RUN FUNCTIONS
document.addEventListener("DOMContentLoaded", function () {
  loadParticles();
});

console.log('hello from webpacker!');
