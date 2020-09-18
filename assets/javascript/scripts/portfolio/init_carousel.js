import Glide, { Controls, Breakpoints } from '@glidejs/glide';

const AUTOPLAY_LENGTH = 5000;

export const initCarousel = ( selector ) => {
  const glide = new Glide(selector, {
    type: 'carousel',
    startAt: 1,
    perView: 1,
    autoplay: false,
    hoverpause: true,
  });

  // must be written seperate from initialization
  glide.on( 'carousel.length' , (length) => {
    glide.length = length;
  });

  glide.mount({
    carousel_length,
  });

  glide.update({ autoplay: autoplayDuration(glide.length) })

  return glide;
}

// CUSTOM COMPONENTS/FUNCTIONS
  // CAROUSEL LENGTH (# of slides)
const carousel_length = ( Glide, Components, Events ) => {
  return {
    mount () {
      Events.emit('carousel.length', Components.Sizes.length);
    }
  }
}
  // DETERMINE AUTOPLAY
  // autoplay if the number of slides is greater than 1
const autoplayDuration = ( caroLength ) => {
  if ( caroLength > 1 ) { 
    return AUTOPLAY_LENGTH; 
  } else { 
    return false; 
  }
}
