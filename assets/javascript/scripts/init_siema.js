import Siema from 'siema';

export const initSiema = ( siema_selector, onChange_callback, onInit_callback ) => {
    // INITIALIZE SLIDER
  const siema = new Siema({
    selector: siema_selector,
    duration: 500,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: false,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => { onInit_callback },
    onChange: () => { onChange_callback },
  });

  return siema;
}
