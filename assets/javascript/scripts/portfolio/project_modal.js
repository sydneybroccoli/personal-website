import { toggleModal } from '../modalActions.js';

export const projects_toggleModal = () => {
  const modals = document.querySelectorAll('.proj-modal');

  modals.forEach( (modal) => {
    const proj_id = modal.id;
    const openBtn = document.querySelector(`#${proj_id}_openBtn`);
    const closeBtn = document.querySelector(`#${proj_id}_closeBtn`);

    toggleModal( modal, openBtn, closeBtn );
  });
}
