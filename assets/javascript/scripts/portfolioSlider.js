import Siema from 'siema';

export const slider = () => {
  // DECLARE VARIABLES
  const slider = document.querySelector('.siema');
  const paginations = document.querySelectorAll('.pagination-item');

    // INITIALIZE SLIDER
  const projectSlider = new Siema({
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: false,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {
      updatePaginate(projectSlider, paginations);  // UPDATE PAGINATE
    },
  });

  // SLIDER-ACTION
    // onClick
  slider.addEventListener('click', (e) => {
    projectSlider.next(1);  // GO TO CORRECT SLIDE
  })

  // PAGINATE-ACTION
  paginations.forEach((item, index) => {
    // PAGINATE ITEM onClick
    item.firstChild.addEventListener('click', (e) => {
      e.preventDefault();
      projectSlider.goTo(index);  // GO TO CORRECT SLIDE
    });
  });

}

const updatePaginate = (slider, paginations) => {
  // REMOVE ACTIVE FROM ALL PAGINATE
  paginations.forEach((item) => item.classList.remove('active') );

  // ADD ACTIVE TO THE CURRENT SLIDE
  let index = slider.currentSlide;
  console.log(index)
  paginations[index].classList.add('active');
}