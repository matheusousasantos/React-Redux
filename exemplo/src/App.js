import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';

const reducer = function(state, action) {

  if(action.type === "INC") {
    console.log("Incrementando...");
    return state + action.payload;

  } else if(action.type ==="DESC") {
    console.log("Incrementando...");
    return state - action.payload;
  }

  return state;
}

const store = createStore(reducer,0);

store.subscribe(function() {
  console.log("O estado mudou!", store.getState());
})

store.dispatch({ type: 'INC', payload:3 });
store.dispatch({ type: 'INC', payload:3 });
store.dispatch({ type: 'INC', payload:3 });
store.dispatch({ type: 'DESC', payload:3 });

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
