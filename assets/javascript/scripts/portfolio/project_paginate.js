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