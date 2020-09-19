import { imgCarousel } from './project_carousel.js';
import { container_determineWidth, container_calculateDimensions } from './project_responsive-sizing.js';

// DECLARE VARIABLES
const portfolio = document.querySelector('.portfolio-content');
const projects = document.querySelectorAll('.project-item');

export const output = () => {

  imgCarousel();

  const width = container_determineWidth( projects[0] );
  const dimensions = container_calculateDimensions( width );
  console.log(dimensions);
}