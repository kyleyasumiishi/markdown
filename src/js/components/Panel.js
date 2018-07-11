import React from "react";
import "../containers/PanelContainer";

const Panel = props => {
  return (
    <div
      className="container"
      onMouseUp={props.mouseup}
      onMouseMove={props.mousemove}
    >
      <div id="editor" className="panel">
        <div className="panel-heading">Editor</div>
        <textarea
          className="editor-text"
          onChange={props.onchange}
          value={props.output}
        />
      </div>
      <div className="handler" onMouseDown={props.mousedown} />
      <div id="previewer" className="panel">
        <div className="panel-heading">Previewer</div>
        <div
          className="previewer-output"
          dangerouslySetInnerHTML={props.innerHTML}
        />
      </div>
    </div>
  );
};

export default Panel;
