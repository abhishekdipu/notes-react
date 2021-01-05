/*
- update document title as per counter value
- if we add a input field then which each key press in input field, component re-renders(which is fine), but also
 title of document get reset that many times to same thing, which is unnecessary.
 - so we put condtion to check the change in count before updating title.

 - same can be done in useEffect count in array (useEffect optionally accept array 2nd param to keep watch on state variable passed)
*/

import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `clicked ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("document title updated");
      document.title = `clicked ${this.state.count} times`;
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounter;
