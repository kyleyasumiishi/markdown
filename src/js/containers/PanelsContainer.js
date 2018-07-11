import React, { Component } from "react";
import Panels from "../components/Panels";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { edit } from "../actions/edit";
import { handleMouseDown, handleMouseUp } from "../actions/drag";
const marked = require("marked");

class PanelsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.convertMarkdownToHTML = this.convertMarkdownToHTML.bind(this);
  }

  handleMouseMove(event) {
    if (this.props.isHandlerDragging) {
      const editor = document.getElementById("editor");
      let pointerRelativeXpos = event.clientX;
      console.log(pointerRelativeXpos);
      editor.style.width = pointerRelativeXpos - 5 + "px";
      editor.style.flexGrow = 0;
    }
  }

  convertMarkdownToHTML() {
    return { __html: marked(this.props.input) };
  }

  render() {
    return (
      <Panels
        mousedown={this.props.handleMouseDown}
        mousemove={this.handleMouseMove}
        mouseup={this.props.handleMouseUp}
        onchange={this.props.handleTextInput}
        innerHTML={this.convertMarkdownToHTML()}
        input={this.props.input}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isHandlerDragging: state.isHandlerDragging,
    input: state.input
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleMouseDown: handleMouseDown,
      handleMouseUp: handleMouseUp,
      handleTextInput: edit
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PanelsContainer);
