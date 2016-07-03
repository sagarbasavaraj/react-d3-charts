import React, {PropTypes} from 'react';
import d3 from 'd3';
import Arc from './Arc';
import Legend from './Legend';
import {Circle} from '../shapes'

const ArcContainer = (props) => {
  const {data, chartSeries, transform, innerRadius,
    outerRadius, colors, stroke, strokeWidth} = props;

    //Construct chart data.
    //Loop through chartSeries, set color if not set and get value from data
    //and assign to each item in the chartSeries
    const chartData = chartSeries.map((item, index)=> {
      let value;
      if(!item.color)
        item.color = colors(index);

      //look for alternate
      data.forEach((d) => {
        if(d.label === item.name){
          value = d.value;
        }
      })

      return Object.assign(item, {'value':value})
    });

    //Pie Layout.
    const pie = d3.layout.pie()
        .sort(null)
        .value((d) => d.value);

    //Arc values
    const arcData = pie(chartData);
    //Legend size
    const legendSize = 22;
    //legend spacing
    const legendSpacing = 6;
    //Legend height
    const legendHeight = legendSize + legendSpacing;
    //vertical offset
    const offset =  legendHeight * chartData.length / 2;
    //Legend horizontal position
    const horz = -1.0 * legendSize;

    //Itterate over data and draw the arc.
    const arcs = arcData.map((arc, index) => {
      //Legend vertical position
      const vert = index * legendHeight - offset;
      const legendTransform = `translate(${horz}, ${vert})`;

      return (
        <g key={index}>
            <Arc
                startAngle={arc.startAngle}
                endAngle={arc.endAngle}
                outerRadius={outerRadius}
                innerRadius={innerRadius}
                stroke={stroke}
                strokeWidth={strokeWidth}
                fill={arc.data.color} />

            <Legend
                className="legend"
                transform={legendTransform}
                legendSize={legendSize}
                legendSpacing={legendSpacing}
                label={arc.data.name}
                fill={arc.data.color} />
          </g>
      );
    });

    //Inner circle radius.
    const innerCircleRadius = Math.min(innerRadius, outerRadius) - 5;

    return (
      <g transform={transform} >
          <Circle radius={innerCircleRadius} />
          {arcs}
      </g>
    );
};

ArcContainer.propTypes = {
  data: PropTypes.array,
  chartSeries: PropTypes.array,
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
  stroke:PropTypes.string,
  strokeWidth:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
}

export default ArcContainer;
