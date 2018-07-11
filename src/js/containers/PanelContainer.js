import React, { Component } from "react";
import Panel from "../components/Panel";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { handleTextInput } from "../actions/handleTextInput";
import { handleMouseDown, handleMouseUp } from "../actions/handlerActions";
const marked = require("marked");

class PanelContainer extends Component {
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
    return { __html: marked(this.props.output) };
  }

  render() {
    return (
      <Panel
        mousedown={this.props.handleMouseDown}
        mousemove={this.handleMouseMove}
        mouseup={this.props.handleMouseUp}
        onchange={this.props.handleTextInput}
        innerHTML={this.convertMarkdownToHTML()}
        output={this.props.output}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isHandlerDragging: state.isHandlerDragging,
    output: state.textInput
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleMouseDown: handleMouseDown,
      handleMouseUp: handleMouseUp,
      handleTextInput: handleTextInput
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PanelContainer);
