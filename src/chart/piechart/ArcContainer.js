import React, {PropTypes} from 'react';
import d3 from 'd3';
import Arc from './Arc';
import Legend from './Legend';
import {Circle} from '../shapes'

const ArcContainer = (props) => {
  const {values, labels, transform, innerRadius,
    outerRadius,colors, colorAccessor,stroke, strokeWidth} = props;

    //Pie Layout.
    const pie = d3.layout
        .pie()
        .sort(null);
    //Arc values
    const arcData = pie(values);
    //Itterate over data and draw the arc.
    const arcs = arcData.map((arc, index) => {
      return (
        <Arc key={index}
            value={values[index]}
            startAngle={arc.startAngle}
            endAngle={arc.endAngle}
            outerRadius={outerRadius}
            innerRadius={innerRadius}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill={colors(colorAccessor(index))} />
      );
    });

    //Legends
    const legends = labels.map((label, index) => {
      return (
        <Legend key={index}
            position={index}
            className="legend"
            label={label}
            colors={colors}
            fill={colors(colorAccessor(index))} />
      );
    });

    //Inner circle radius.
    const innerCircleRadius = Math.min(innerRadius, outerRadius) - 5;

    return (
      <g transform={transform} >
          <Circle radius={innerCircleRadius} />
          {arcs}
          {legends}
      </g>
    );
};

ArcContainer.propTypes = {
  values: PropTypes.array,
  labels: PropTypes.array,
  transform: PropTypes.string,
  innerRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  outerRadius: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  colors: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.array
  ]),
  colorAccessor: PropTypes.func,
  stroke:PropTypes.string,
  strokeWidth:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}

export default ArcContainer;
