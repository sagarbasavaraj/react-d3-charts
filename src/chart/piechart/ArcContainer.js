import React, {PropTypes} from 'react';
import d3 from 'd3';
import Arc from './Arc';
import Legend from './Legend';

const ArcContainer = (props) => {
  const {data, values, labels, transform, innerRadius,
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
            label={labels[index]}
            value={values[index]}
            startAngle={arc.startAngle}
            endAngle={arc.endAngle}
            outerRadius={outerRadius}
            innerRadius={innerRadius}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill={colors(colorAccessor(data[index], index))} />
      );
    });
    //Legends
    const legends = arcData.map((arc, index) => {
      return (
        <Legend key={index}
            position={index}
            className="legend"
            label={labels[index]}
            colors={colors}
            fill={colors(colorAccessor(data[index], index))} />
      );
    });

    return (
      <g transform={transform} >
          {arcs}
          {legends}
      </g>
    );
};

ArcContainer.propTypes = {
  data: PropTypes.array,
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
  colors: PropTypes.func,
  colorAccessor: PropTypes.func,
  stroke:PropTypes.string,
  strokeWidth:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}

export default ArcContainer;
