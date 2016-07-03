import React, {Component, PropTypes} from 'react';

/*
  Base for all charts.
  usage : <Chart height="400" width="500">
            {children}
          </Chart>
*/
export default class Chart extends Component{
  static propTypes = {
    children: PropTypes.node,
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    viewBox:PropTypes.string,
    preserveAspectRatio:PropTypes.string,
    title:PropTypes.string
  };

  constructor(props){
    super(props);
  }

  /*
    Render chart title.
    @return element element containing title.
  */
  _renderTitle(){
    const {title} = this.props;
    return (<h4>{title}</h4>);
  }

  /*
    Render svg element.
    @return svg.
  */
  _renderChart(){
    const {width,height,viewBox, preserveAspectRatio, children, } = this.props;
    return(
      <svg width={width} height={height} viewBox={viewBox}
        preserveAspectRatio={preserveAspectRatio}>
          {children}
      </svg>
    );
  }

  render(){
    const {className} = this.props;
    return (
      <div className={className}>
        {::this._renderTitle()}
        {::this._renderChart()}
      </div>
    );
  }
}
