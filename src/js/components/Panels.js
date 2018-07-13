import React from "react";
import "../containers/PanelsContainer";

const Panels = props => {
  return (
    <div
      className="container"
      onMouseUp={props.handleMouseUp}
      onMouseMove={props.handleMouseMove}
      onClick={props.clearDropdown}
    >
      <div id="editor" className="panel">
        <div className="panel-heading">Editor</div>
        <textarea
          className="editor-text"
          onChange={props.editMarkdown}
          value={props.markdown}
        />
      </div>
      <div className="handler" onMouseDown={props.handleMouseDown} />
      <div id="previewer" className="panel">
        <div className="panel-heading">Previewer</div>
        <div
          className="previewer-output"
          dangerouslySetInnerHTML={props.html}
        />
      </div>
    </div>
  );
};

export default Panels;
