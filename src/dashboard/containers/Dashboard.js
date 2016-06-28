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
    return (
      <Container className="chart-container">
          <PieChart
            className="pie-chart"
            width="500"
            height="400"
            data={chart}
            strokeWidth="3"
            title="Donut Chart"/>
            <button className="primary" type="button" onClick={::this.onClick}>Update</button>
      </Container>
    );
  }
}
