import React, { Component } from "react";
import Panels from "../components/Panels";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { editMarkdown } from "../actions/editMarkdown";
import { handleMouseDown, handleMouseUp } from "../actions/drag";
import { setDropdownVisibility } from "./setDropdownVisibility";
const marked = require("marked");

class PanelsContainer extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.convertMarkdownToHTML = this.convertMarkdownToHTML.bind(this);
    this.clearDropdown = this.clearDropdown.bind(this);
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
    return { __html: marked(this.props.markdown) };
  }

  clearDropdown(event) {
    setDropdownVisibility(event);
  }

  render() {
    return (
      <Panels
        clearDropdown={this.clearDropdown}
        handleMouseDown={this.props.handleMouseDown}
        handleMouseMove={this.handleMouseMove}
        handleMouseUp={this.props.handleMouseUp}
        editMarkdown={this.props.editMarkdown}
        markdown={this.props.markdown}
        html={this.convertMarkdownToHTML()}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    isHandlerDragging: state.isHandlerDragging,
    markdown: state.markdown
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleMouseDown: handleMouseDown,
      handleMouseUp: handleMouseUp,
      editMarkdown: editMarkdown
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PanelsContainer);
