import Siema from 'siema';
import { initSiema } from './init_siema';

// DECLARE VARIABLES
const siemas = document.querySelectorAll('.siema');
const paginators = document.querySelectorAll('ul.paginator li.paginator-item');
const projs = [
  {
    project_id: 1,
    siema: null,
    slider: document.querySelector('#project-1 .siema'),
    items: document.querySelectorAll('#project-1 .siema-item'),
  },
  {
    project_id: 2,
    siema: null,
    slider: document.querySelector('#project-2 .siema'),
    items: document.querySelectorAll('#project-2 .siema-item'),
  },
  {
    project_id: 3,
    siema: null,
    slider: document.querySelector('#project-3 .siema'),
    items: document.querySelectorAll('#project-3 .siema-item'),
  },
];

export const output = () => {
  for(const siema of siemas) {
    new Siema({
    selector: siema,
    loop: true,
    duration: 1000,
    perPage: 1
  });
  }
}

// **************************************************************************//

// SIEMA FUNCTIONS
const createSiemas = ( projs ) => {
// ITERATE THROUGH PROJECTS
  // for each project, do...
  projs.forEach( (proj, index) => {
    if (proj.items.length > 1) {
      // init IMG SIEMA
      const selector = `#project-${index + 1} .siema`;
      proj.siema = initSiema(selector, siema_onChange, siema_onInit);
      proj.siema.init();

      // init AUTOPLAY
      setInterval( () => proj.siema.next(), 4000 );
    }
  });
  console.log(projs)


  // INITIALIZE SIEMA CALLBACKS
  const siema_onInit = () => {}
  const siema_onChange = () => {}
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