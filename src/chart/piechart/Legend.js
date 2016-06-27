import React, {PropTypes} from 'react';
import {Rectangle} from '../shapes';

const Legend = ({position, label, className, colors, legendSize, legendSpacing, fill}) => {
  const height = legendSize + legendSpacing;
  const offset =  height * colors.domain().length / 2;
  const horz = -1.0 * legendSize;
  const vert = position * height - offset;
  const transform = `translate(${horz}, ${vert})`;
  const legendStyle = {
    fill:fill,
    stroke:fill
  }

  return (
    <g className={className} transform={transform}>
      <Rectangle width={height - legendSize} height={legendSize} style={legendStyle} />
      <text x={height - legendSpacing} y={legendSize - legendSpacing}>
        {label}
      </text>
    </g>
  )
}

Legend.defaultProps = {
  label:'',
  legendSize:22,
  legendSpacing:8
}

Legend.propTypes = {
  position:PropTypes.any,
  label:PropTypes.any,
  className:PropTypes.any,
  legendSize:PropTypes.any,
  legendSpacing:PropTypes.any,
  fill:PropTypes.any,
  colors:PropTypes.any,
}

export default Legend;
