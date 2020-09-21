import { imgCarousel } from './project_carousel.js';
import { container_determineWidth, container_calculateDimensions } from './project_responsive-sizing.js';

// DECLARE VARIABLES
const portfolio = document.querySelector('.portfolio-content');
const projects = document.querySelectorAll('.project-item');

export const output = () => {
  imgCarousel();
  const width = container_determineWidth( projects[0] );
  const dimensions = container_calculateDimensions( width );
}

const projectStyle = ( projects, obj ) => {
  projects.forEach( (proj) => {
    proj.style.height = `${obj.content.height}px`;
    proj.style.width = `${obj.content.width}px`;
    proj.style.margin = `${obj.x}px ${obj.y}px`
    // TITLE
    const t = proj.querySelector('.project-title');
    t.style.height = `${obj.title.height}px`;
    t.style.width = `${obj.title.width}px`;
    // DESCRIPTION
    const d = proj.querySelector('.project-desc');
    d.style.height = `${obj.desc.height}px`;
    d.style.width = `${obj.desc.width}px`;
    // LINK
    const l = proj.querySelector('.project-link');
    l.style.height = `${obj.link.height}px`;
    l.style.width = `${obj.link.width}px`;
    // CAROUSEL
    const c = proj.querySelector('.project-img');
    c.style.height = `${obj.img.height}px`;
    c.style.width = `${obj.img.width}px`;


  });
}