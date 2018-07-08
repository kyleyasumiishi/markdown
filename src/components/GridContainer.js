import React, { Component } from "react";
import Grid from "./Grid";

class GridContainer extends Component {
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
    console.log("mousedown");
    if (event.target.className === "handler") {
      this.setState({
        isHandlerDragging: true
      });
      console.log("Mousedown on handler");
    }
  }

  handleMouseMove(event) {
    if (this.state.isHandlerDragging) {
      const container = event.target.parentNode;
      console.log(container);
      const containerOffsetLeft = container.offsetLeft;
      const pointerRelativeXpos = event.clientX - containerOffsetLeft;
      const editor = container.querySelector(".editor");
      editor.style.width = pointerRelativeXpos - 10 + "px";
      editor.style.flexGrow = 0;
    }
  }

  handleMouseUp(event) {
    this.setState({
      isHandlerDragging: false
    });
  }

  render() {
    return (
      <Grid
        mousedown={this.handleMouseDown}
        mousemove={this.handleMouseMove}
        mouseup={this.handleMouseUp}
      />
    );
  }
}

export default GridContainer;
