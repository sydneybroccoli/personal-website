const resumeModal = () => {
  // DECLARE VARIABLES
  const modal = document.getElementById('resumeModal');
  const openBtn = document.getElementById('resumeBtnOpen');
  var closeBtn = document.getElementById('resumeBtnClose');

  // EVENT LISTENER
  // OPEN MODAL
  openBtn.addEventListener('click', (event)=> {
    modal.style.display = 'block';
    console.log('open');

    // CLOSE MODAL
    closeBtn.addEventListener('click', (event)=> {
      modal.style.display = 'none';
      console.log('closed');

    });

    window.addEventListener('click', (event)=> {
      // if the user clicks outside of the modal, close the modal
      if(event.target == modal) {
        modal.style.display = 'none';
        console.log('closed');
      }
    });
  });

}

export { resumeModal };
