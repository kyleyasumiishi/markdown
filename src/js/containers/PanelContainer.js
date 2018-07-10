import React, { Component } from "react";
import Panel from "./Panel";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { handleMouseDown, handleMouseUp } from "../actions/handlerActions";

class PanelContainer extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(event) {
    if (this.props.isHandlerDragging) {
      const editor = document.getElementById("editor");
      let pointerRelativeXpos = event.clientX;
      editor.style.width = pointerRelativeXpos - 5 + "px";
      editor.style.flexGrow = 0;
    }
  }

  render() {
    return (
      <Panel
        mousedown={this.props.handleMouseDown}
        mousemove={this.handleMouseMove}
        mouseup={this.props.handleMouseUp}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isHandlerDragging: state.isHandlerDragging
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleMouseDown: handleMouseDown,
      handleMouseUp: handleMouseUp
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PanelContainer);