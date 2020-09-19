export const container_determineWidth = ( container ) => {
  switch( typeof container ) {
    case 'object':
      return container.offsetWidth;
      break;
    case 'string':
      return document.querySelector(container).offsetWidth;
    default:
      return null;  // eventually the default can use the media breakpoints
  }
}

export const container_calculateDimensions = ( container_width ) => {
  let out = new Object({
    width: container_width,
    height: container_width * 0.35, 
  });

  calcSpacing(out);
  calcContent(out);
  calcSubContent(out);

  return out;
}

const calcSpacing = ( obj ) => {
  return Object.assign(obj, {
    x: obj.height * 0.02,
    y: obj.height * 0.04,
    xx: obj.height * 0.04,
    yy: obj.height * 0.01,
  });
}
const calcContent = ( obj ) => {
  return Object.assign(obj, {
     content: {
        height: obj.height - ( 2 * obj.x ),
        width: obj.height - ( 2 * obj.y ),
      },
  });
}
const calcSubContent = ( obj ) => {
  return Object.assign(obj, {
    img: {
      width: 'auto',
      height: obj.content.height * 0.90,
    },

    title: {
      width: obj.content.width * 0.45,
      height: ( obj.content.height - obj.xx ) * 0.33,
    },

    desc: {
      width: obj.content.width * 0.33,
      height: ( obj.content.height - obj.xx ) * 0.66,
    },

    link: {
      width: obj.content.width * 0.33,
      height: obj.content.height * 0.10,
    },
  });
}

