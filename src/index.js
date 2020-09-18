// IMPORT JS LIBRARIES
import _ from 'lodash';
const path = require('path');

// IMPORT FILES

// IMPORT STYLE
import './style.scss';  // import main SASS FILE


// IMPORT JS PLUGINS
// IMPORT OTHER JS SCRIPTS
import { resumeModal } from '../assets/javascript/scripts/resume/modal.js';
import { imgCarousel as portfolioSlider } from '../assets/javascript/scripts/portfolio/project_carousel.js';

// DEVELOPMENT MODE?
if (process.env.NODE_ENV !== 'production') {
  console.log('looks like we are in development mode!');
}

// RUN FUNCTIONS
document.addEventListener("DOMContentLoaded", function () {
  resumeModal();
  portfolioSlider();
});

console.log('hello from webpacker!');
