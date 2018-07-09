import React, { Component } from "react";
import Panel from "./Panel";

class PanelContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHandlerDragging: false
    };
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseDown(event) {
    if (event.target.className === "handler") {
      this.setState({
        isHandlerDragging: true
      });
    }
  }

  handleMouseUp(event) {
    this.setState({
      isHandlerDragging: false
    });
  }

  handleMouseMove(event) {
    if (this.state.isHandlerDragging) {
      const container = event.target.parentNode;
      const editor = container.querySelector(".editor");
      let pointerRelativeXpos = event.clientX;
      editor.style.width = pointerRelativeXpos - 5 + "px";
      editor.style.flexGrow = 0;
    }
  }

  render() {
    return (
      <Panel
        mousedown={this.handleMouseDown}
        mousemove={this.handleMouseMove}
        mouseup={this.handleMouseUp}
      />
    );
  }
}

export default PanelContainer;
