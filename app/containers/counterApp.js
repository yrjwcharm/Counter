'use strict';

import React, {Component} from 'react';
import {Alert} from 'react-native'
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }
  render() {
    const { state1, actions1 } = this.props;
    return (
      <Counter
        counter={state1.count}
        {...actions1}
      />
    );
  }
}
export default connect(state => ({
      state1: state.counter,
    }
    ),
    dispatch => (
       // console.log(bindActionCreators(counterActions,dispatch),123434),
    {
     actions1: bindActionCreators(counterActions,dispatch)
     //actions1:dispatch(counterActions.increment())
    })
)(CounterApp);
