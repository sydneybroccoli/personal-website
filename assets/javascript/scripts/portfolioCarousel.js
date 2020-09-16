import Glide, { Controls, Breakpoints } from '@glidejs/glide';

// DECLARE VARIABLES
const carousels = document.querySelectorAll('.glide');

export const output = () => {
  initCarousels( carousels );
}

// **************************************************************************//

// CAROUSEL FUNCTIONS
const initCarousels = ( carousels ) => {
  Object.values(carousels).map( (caro) => {
    const glider = new Glide( caro , {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      autoplay: 5000,
      hoverpause: true
    }).mount();
  });
}


// PAGINATE FUNCTIONS
const selectPaginate = (slider, paginations) => {
  paginations.forEach((item, index) => {
    item.firstChild.addEventListener('click', (e) => {
      e.preventDefault();
      slider.goTo(index);  // GO TO SELECTED SLIDE
    });
  });
}

const updatePaginate = (slider, paginations) => {
  // REMOVE ACTIVE CLASS
  paginations.forEach((item) => item.classList.remove('active') );

  // ADD ACTIVE TO THE CURRENT SLIDE
  let index = slider.currentSlide;
  paginations[index].classList.add('active');
}

// SLIDER FUNCTIONS
const toggleSlider = (slider, paginations) => {
  // SLIDER onClick
  // slider.selector.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   slider.next(1);  // GO TO NEXT SLIDE
  // });
  // PAGINATE onClick
  selectPaginate(slider, paginations);
}

const autoplaySlider = (siema, interval) => {
  let autoplay = setInterval( () => siema.next(), interval );
  // PAUSE ON HOVER
  // will pause the autoplay when the user mouse is over the slider div ONLY
  siema.selector.addEventListener( 'mouseover', (e) => clearInterval(autoplay) );
  siema.selector.addEventListener( 'mouseout', (e) => autoplaySlider(siema, interval) );
  // when the recursive is called, the action is run in reverse - will need to be fixed eventually...
}