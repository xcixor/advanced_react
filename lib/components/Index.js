import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    'name': 'Peter'
  };

  render() {
    return (
      <h2>Hello class component from -- {this.state.name}</h2>
    );
  }
}


ReactDOM.render(
  <App/>, document.getElementById('root')
);