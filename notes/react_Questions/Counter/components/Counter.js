import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  //this is the recommanded method, as it keep the track of previous state of the component
  // increment = () => {
  //   this.setState((prevState) => ({ count: prevState + 1 }));
  // };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>+1</button>
        <span>{this.state.count}</span>
        <button onClick={this.decrement}>-1</button>
      </div>
    );
  }
}

export default Counter;
