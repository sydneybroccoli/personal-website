import Glide, { Controls, Breakpoints } from '@glidejs/glide';

export const initCarousel = (selector, autoplay_duration = 5000) => {
  const glide = new Glide(selector, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: autoplay_duration,
    hoverpause: true,
  });

  // had to seperate this from the initial instance else I couldnt assign length
  glide.on('carousel.length', (length) => {
    glide.length = length
  });

  glide.mount({ 
    carousel_length
  });

  return glide;
}

// CUSTOM COMPONENTS
  // CAROUSEL LENGTH (# of slides)
const carousel_length = ( Glide, Components, Events ) => {
  return {
    mount () {
      Events.emit('carousel.length', Components.Sizes.length);
    }
  }
}