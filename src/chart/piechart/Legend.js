import React, {PropTypes} from 'react';
import {Rectangle} from '../shapes';

const Legend = ({transform, label, className, legendSize, legendSpacing, fill}) => {
  const height = legendSize + legendSpacing;
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
  transform:PropTypes.string,
  label:PropTypes.string,
  className:PropTypes.string,
  legendSize:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  legendSpacing:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  fill:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ])
}

export default Legend;
