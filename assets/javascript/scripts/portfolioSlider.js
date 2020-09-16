import Siema from 'siema';
import { initSiema } from './init_siema';

// DECLARE VARIABLES
const slider = document.querySelector('.siema.slider-content');
const slides = document.querySelectorAll('.slide-item');
const paginations = document.querySelectorAll('.paginate-item');

export const output = () => {
  // INITIALIZE SIEMA
  const siema = initSiema( '.siema.slider-content', siema_onChange, siema_onInit );
  siema.init();
  console.log(siema)

  // AUTOPLAY
  autoplaySlider(siema, 4000);

  // TOGGLE SLIDER
  // will go to next slide onClick of slider and will go to corresponding slide depending on paginate selected.
  toggleSlider(siema, paginations);
}

// **************************************************************************//

// INITIALIZE SIEMA CALLBACKS
const siema_onInit = () => {}
const siema_onChange = () => {
  updatePaginate(sieam, paginations);
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

const autoplaySlider = (slider, interval) => {
  let autoplay = setInterval( () => slider.next(1), interval );
  // PAUSE ON HOVER
  // will pause the autoplay when the user mouse is over the slider div ONLY
  slider.selector.addEventListener( 'mouseover', (e) => clearInterval(autoplay) );
  slider.selector.addEventListener( 'mouseout', (e) => autoplaySlider(slider, interval) );
  // when the recursive is called, the action is run in reverse - will need to be fixed eventually...
}