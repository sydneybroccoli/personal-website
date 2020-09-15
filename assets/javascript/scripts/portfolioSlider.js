import Siema from 'siema';

export const slider = () => {
  // DECLARE VARIABLES
  const slider = document.querySelector('.siema');
  const slides = document.querySelectorAll('.slider-item');
  const paginations = document.querySelectorAll('.pagination-item');

    // INITIALIZE SLIDER
  const siema = new Siema({
    selector: '.siema',
    duration: 500,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: false,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {

    },
    onChange: () => {
      updatePaginate(siema, slides, paginations);  // UPDATE PAGINATE
    },
  });

  // AUTOPLAY
  autoplaySlider(siema, 4000);

  // TOGGLE SLIDER
  // will go to next slide onClick of slider and will go to corresponding slide depending on paginate selected.
  toggleSlider(siema, paginations);

} // END OF EXPORTED FUNCTION

// **************************************************************************//

// PAGINATE FUNCTIONS
const selectPaginate = (slider, paginations) => {
  paginations.forEach((item, index) => {
    item.firstChild.addEventListener('click', (e) => {
      e.preventDefault();
      slider.goTo(index);  // GO TO SELECTED SLIDE
    });
  });
}

const updatePaginate = (slider, slides, paginations) => {
  // REMOVE ACTIVE CLASS
  paginations.forEach((item) => item.classList.remove('active') );
  slides.forEach((item) => item.classList.remove('active'));

  // ADD ACTIVE TO THE CURRENT SLIDE
  let index = slider.currentSlide;
  paginations[index].classList.add('active');
  slides[index].classList.add('active');
}

// SLIDER FUNCTIONS
const toggleSlider = (slider, paginations) => {
  // SLIDER onClick
  slider.selector.addEventListener('click', (e) => {
    e.preventDefault();
    slider.next(1);  // GO TO NEXT SLIDE
  });
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