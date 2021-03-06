import React, {Component, PropTypes} from 'react';
import {Container} from '../../base/components';
import PieChart from '../../chart/piechart/PieChart';
import {connect} from 'react-redux';
import {update} from '../actions/action';

@connect(state => state, {update})
export default class Dashboard extends Component {
  static propTypes = {
    className:PropTypes.string
  };

  constructor(props){
    super(props);
  }

  //Check re-rendering of svg element.
  //TODO : Remove this later
  onClick(){
    const {update} = this.props;
    update();
  }

  render(){
    const {chart} = this.props;
    //Chart series
    const chartSeries = [
      {
        'name':'One',
        'color':'red'
      },
      {
        'name':'Two',
        'color':'green'
      },
      {
        'name':'Three',
        'color':'grey'
      },
      {
        'name':'Four',
        'color':'blue'
      },
      {
        'name':'Five',
        'color':'yellow'
      },
      {
        'name':'Six',
        'color':'orange'
      },
      {
        'name':'Seven',
        'color':'blue'
      },
      {
        'name':'Eight',
        'color':'grey'
      }
    ];

    return (
      <Container className="chart-container">
          <PieChart
            className="pie-chart"
            width="500"
            height="400"
            viewBox="0 0 500 400"
            preserveAspectRatio="xMinYMin meet"
            data={chart}
            chartSeries={chartSeries}
            strokeWidth="3"
            title="Donut Chart"/>
          <button type="button" className="primary"
              onClick={::this.onClick}>
              Update 
          </button>
      </Container>
    );
  }
}
