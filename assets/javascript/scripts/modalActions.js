export const toggleModal = ( modal, openBtn, closeBtn ) => {
  openModal( modal, openBtn, closeBtn );
}

export const positionModal = ( modal ) => {

}

/**********/

const openModal = ( modal, openBtn, closeBtn ) => {
    openBtn.addEventListener('click', (event)=> {
    modal.style.display = 'block';
    console.log('open');

    closeModal( modal, closeBtn );
  });
}
const closeModal = ( modal, closeBtn ) => {
  // CLICK ON 'X'
  closeBtn.addEventListener('click', (event)=> {
    modal.style.display = 'none';
  });

  // CLICK OUTSIDE MODAL
  window.addEventListener('click', (event)=> {
    // if the user clicks outside of the modal, close the modal
    if(event.target == modal) {
      modal.style.display = 'none';
      console.log('closed');
    }
  });
}