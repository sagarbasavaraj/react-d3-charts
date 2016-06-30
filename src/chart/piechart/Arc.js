import React, {PropTypes} from 'react';
import d3 from 'd3';

const Arc = (props) => {
  const {startAngle, endAngle, innerRadius, outerRadius,
    stroke, fill, strokeWidth} = props;

  //Arc shape.
  const arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle(startAngle)
    .endAngle(endAngle);

  return (
      <path
        d={arc()}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
  );
}

Arc.propTypes = {
  innerRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  outerRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  stroke:PropTypes.string,
  strokeWidth:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  fill:PropTypes.string,
  startAngle:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  endAngle:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
};

export default Arc;
