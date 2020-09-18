// IMPORT
  // LIBRARIES
  // FUNCTIONS
import { initCarousel } from './init_carousel.js'; //selector, autoplay_dur

// DECLARE VARIABLES
const carousels = document.querySelectorAll('.glide');

export const imgCarousel = () => {
  // ITERATE THROUGH CAROUSELS

  Object.values( carousels ).map( (caro) => {
    const glide = initCarousel( caro );
  })

}
