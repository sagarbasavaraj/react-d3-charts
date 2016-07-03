import React, {Component, PropTypes} from 'react';
import d3 from 'd3';
import Chart from '../common/Chart';
import ArcContainer from './ArcContainer';

/*
  Pie Chart component.
  Use this component to render pie chart.
*/
export default class PieChart extends Component {

  //Component Prop Types.
  static propTypes = {
    className:PropTypes.string,
    data:PropTypes.array,
    viewBox:PropTypes.string,
    preserveAspectRatio:PropTypes.string,
    chartSeries:PropTypes.array,
    outerRadius: PropTypes.number,
    innerRadius: PropTypes.number,
    cx: PropTypes.number,
    cy: PropTypes.number,
    colors: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.array
    ]),
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
    colors: d3.scale.category20c() //Color scale from d3 category.
  }

  constructor(props){
    super(props);
  }

  render(){
    const {className, viewBox, preserveAspectRatio, title, cx, cy, width,
      height, data, colors, outerRadius, chartSeries, innerRadius,
      stroke, strokeWidth} = this.props;
    //position the chart
    const transform = `translate(${cx || width / 2},${cy || height / 2})`;
    //Calculate radius
    const radius = Math.min(width, height) / 2;
    //Pie chart inner radius
    const pieInnerRadius = innerRadius || radius - 30;
    //Pie chart outer radius
    const pieOuterRadius = outerRadius || radius - 50;

    return(
      <Chart className={className} title={title}
        width={width}
        height={height}
        viewBox={viewBox}
        preserveAspectRatio={preserveAspectRatio}>
          <ArcContainer
            data={data}
            chartSeries={chartSeries}
            colors={colors}
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
