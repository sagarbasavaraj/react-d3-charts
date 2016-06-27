import React, {PropTypes} from 'react';

/*
 Component to render Circle.
 @param cx horizontal position of circle.
 @param cy vertical position of circle.
 @param radius radius of the circle.
 @param style object containing style properties (fill, stroke, stroke-width etc..).
 @return ReactElement Circle

 Usage : <Circle cx="0"
              cy="0"
              radius="50"
              style {{stroke:"#ffffff", stroke-width:"1"}} />
*/
const Circle = ({cx, cy, radius, style}) => (<circle
            cx={cx}
            cy={cy}
            r={radius}
            style={style} />
          )

Circle.propTypes = {
  cx:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cy:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  radius:PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  style:PropTypes.object
};

Circle.defaultProps = {
  cx:0,
  cy:0,
  style:{fill:'#ffffff', stroke:'green', strokeWidth:'2'}
}

export default Circle;
