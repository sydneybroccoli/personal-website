import Siema from 'siema';

export const initSiema = ( siema_selector, onChange_callback, onInit_callback ) => {
    // INITIALIZE SLIDER
  new Siema({
    selector: siema_selector,
    loop: true,
    duration: 1000,
    perPage: 1,
    onInit: () => { onInit_callback },
    onChange: () => { onChange_callback },
  });
}
