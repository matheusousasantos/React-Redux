import React, { Component } from 'react';
import './App.css';



export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  state = {
    count: 0,
  };

  increment = () => {
    this.setState( { count: this.state.count + 1 } );
  }

  decrement = () => {
    this.setState( { count: this.state.count - 1 } );
  }

  render() {
    return(
      <div className="container"> 
        <h5>{ this.state.count }</h5>
        <button onClick={ this.increment }>+</button>
        <button onClick={ this.decrement }>-</button>

      </div>
    );
  }

}
