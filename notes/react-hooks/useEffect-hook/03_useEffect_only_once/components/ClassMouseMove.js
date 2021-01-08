//
import React, { Component } from "react";

class ClassMouseMove extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  getMousePostion = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.getMousePostion);
  }

  render() {
    return (
      <div>
        X: {this.state.x} Y: {this.state.y}
      </div>
    );
  }
}

export default ClassMouseMove;
