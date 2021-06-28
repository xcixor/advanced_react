import React, { Component } from 'react';
import storeProvider from './storeProvider';

class Timestamp extends Component {
  render() {
    return (
      <div className="date">
        {this.props.timestamp.toString()}
      </div>
    );
  }
}

function extraProps(store){
  return {
    timestamp: store.getState().timestamp,
  };
}

export default storeProvider(extraProps)(Timestamp);