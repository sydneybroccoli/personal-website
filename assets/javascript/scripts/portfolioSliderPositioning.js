import { slider } from './portfolioSlider.js';

export const runSlider = () => {
  // RUN SLIDER
  slider();

}

// DECLARE VARIABLES

// FIND WIDTH

// ASSIGN POSITION STYLING


const calcSliderVars = ( width ) => {
  const slider = {
    width: width,
    height: width * 0.35,
    x: slider.height * 0.02,
    y: slider.height * 0.04,
    xx: slider.height * 0.04,
    yy: slider.height * 0.01,

    content: {
      height: slider.height - ( 2 * slider.x ),
      width: slider.height - ( 2 * slider.y ),
    },

    img: {
      width: auto,
      height: slider.content.height * 0.90,
    },

    title: {
      width: slider.content.width * 0.45,
      height: ( slider.content.height - slider.xx ) * 0.33,
    },

    desc: {
      width: slider.content.width - slider.img.width - slider.yy,
      height: ( slider.content.height - slider.xx ) * 0.66,
    },

    link: {
      width: slider.content.width * 0.33,
      height: slider.content.height * 0.10,
    }
  }
}
