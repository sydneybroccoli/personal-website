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
  let dimensions = new Object();
  dimensions = {
    width: container_width,
    height: container_width * 0.35,
    x: dimensions.height * 0.02,
    y: dimensions.height * 0.04,
    xx: dimensions.height * 0.04,
    yy: dimensions.height * 0.01,

    content: {
      height: dimensions.height - ( 2 * dimensions.x ),
      width: dimensions.height - ( 2 * dimensions.y ),
    },

    img: {
      width: auto,
      height: dimensions.content.height * 0.90,
    },

    title: {
      width: dimensions.content.width * 0.45,
      height: ( dimensions.content.height - dimensions.xx ) * 0.33,
    },

    desc: {
      width: dimensions.content.width - dimensions.img.width - dimensions.yy,
      height: ( dimensions.content.height - dimensions.xx ) * 0.66,
    },

    link: {
      width: dimensions.content.width * 0.33,
      height: dimensions.content.height * 0.10,
    }
  }

  return dimensions;
}

