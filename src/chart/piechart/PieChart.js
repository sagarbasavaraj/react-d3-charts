import React, {Component, PropTypes} from 'react';
import d3 from 'd3';
import Chart from '../common/Chart';
import ArcContainer from './ArcContainer';

/*
  Component to display pie chart.
*/
export default class PieChart extends Component {

  //Component Prop Types.
  static propTypes = {
    data:PropTypes.array,
    outerRadius: PropTypes.number,
    innerRadius: PropTypes.number,
    cx: PropTypes.number,
    cy: PropTypes.number,
    colors: PropTypes.func,
    colorAccessor: PropTypes.func,
    title: PropTypes.string,
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    stroke:PropTypes.string,
    strokeWidth:PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])
  };

  //Default Props.
  static defaultProps = {
    data:[],
    title:'',
    stroke:'#ffffff',
    strokeWidth:1,
    colors: d3.scale.category20c(), //Color scale from d3 category.
    colorAccessor: (d, idx) => idx
  }

  constructor(props){
    super(props);
  }

  render(){
    const {title, cx, cy, width, height, data, colors, colorAccessor ,
      outerRadius, innerRadius, stroke, strokeWidth} = this.props;
    //position the chart
    const transform = `translate(${cx || width / 2},${cy || height / 2})`;
    //Get values from data
    const values = data.map((item) => item.value);
    //Get lables to be displayed from data.
    const labels = data.map((item) => item.label);
    //Calculate radius
    const radius = Math.min(width, height) / 2;
    //Pie chart inner radius
    const pieInnerRadius = innerRadius || radius - 30;
    //Pie chart outer radius
    const pieOuterRadius = outerRadius || radius - 50;

    return(
      <Chart title={title} width={width} height={height}>
          <ArcContainer
            data={data}
            labels= {labels}
            values={values}
            colors={colors}
            colorAccessor={colorAccessor}
            transform={transform}
            stroke={stroke}
            strokeWidth={strokeWidth}
            innerRadius={pieInnerRadius}
            outerRadius={pieOuterRadius}
          />
      </Chart>
    );
  }
}
