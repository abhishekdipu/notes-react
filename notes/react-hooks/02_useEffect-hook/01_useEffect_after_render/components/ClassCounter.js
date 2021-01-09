/*
- update document title as per counter value

*/

import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `clicked ${this.state.count} times`;
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounter;
