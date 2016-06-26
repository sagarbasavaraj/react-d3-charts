import React, {Component, PropTypes} from 'react';
import {Container} from '../../base/components';
import PieChart from '../../chart/piechart/PieChart';
import {connect} from 'react-redux';

@connect(state => state, null)
export default class Dashboard extends Component {
  static propTypes = {
    className:PropTypes.string
  };

  constructor(props){
    super(props);
}

  render(){
    const {chart} = this.props;
    return (
      <Container className="main-container">
          <PieChart
            className="pie-chart"
            width="500"
            height="400"
            data={chart}
            title="Pie Chart"/>
      </Container>
    );
  }
}
