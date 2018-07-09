import React from "react";
import "./PanelContainer";

const Panel = props => {
  return (
    <div
      className="container"
      onMouseUp={props.mouseup}
      onMouseMove={props.mousemove}
    >
      <div className="panel editor">
        <div className="panel-heading">Editor</div>
      </div>
      <div className="handler" onMouseDown={props.mousedown} />
      <div className="panel previewer">
        <div className="panel-heading">Previewer</div>
      </div>
    </div>
  );
};

export default Panel;
