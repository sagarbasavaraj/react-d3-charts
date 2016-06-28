import React, {PropTypes} from 'react';

/*
 Rectangle Component.
 @param width  width of rectangle.
 @param height height of rectangle.
 @param style object containing style properties (fill, stroke, stroke-width etc..).
 @return React.Element Rectangle

 Usage : <Rectangle width="22" height="8" style={{fill:"#ffffff", stroke-width:1}}/>
*/
const Rectangle = ({width, height, style}) => (<rect
            width={width}
            height={height}
            style={style} />
          )

Rectangle.propTypes = {
  width:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style:PropTypes.object
};

export default Rectangle;
