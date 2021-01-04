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
