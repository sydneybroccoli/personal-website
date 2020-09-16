import Glide, { Controls, Breakpoints } from '@glidejs/glide';

export const initCarousel = (selector) => {
  new Glide(selector, {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: true,
    hoverpause: true
  }).mount();
}
