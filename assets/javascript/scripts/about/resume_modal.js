import { toggleModal } from '../modalActions.js';

export const resume_toggleModal = () => {
  // DECLARE VARIABLES
  const modal = document.querySelector('.modal#resumeModal');
  const openBtn = document.querySelector('#resumeBtnOpen');
  const closeBtn = document.querySelector('#resumeBtnClose');
  
  toggleModal( modal, openBtn, closeBtn );
}
