import React, { Component } from "react";
import Panels from "../components/Panels";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { edit } from "../actions/edit";
import { handleMouseDown, handleMouseUp } from "../actions/drag";
import { onClick } from "./onClick";
const marked = require("marked");

class PanelsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.convertMarkdownToHTML = this.convertMarkdownToHTML.bind(this);
    this.click = this.click.bind(this);
  }

  handleMouseMove(event) {
    if (this.props.isHandlerDragging) {
      const editor = document.getElementById("editor");
      let pointerRelativeXpos = event.clientX;
      editor.style.width = pointerRelativeXpos - 5 + "px";
      editor.style.flexGrow = 0;
    }
  }

  convertMarkdownToHTML() {
    return { __html: marked(this.props.input) };
  }

  click(event) {
    onClick(event);
  }

  render() {
    return (
      <Panels
        click={this.click}
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
