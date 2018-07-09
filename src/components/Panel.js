import React from "react";
import "./PanelContainer";

const Panel = props => {
  return (
    <div
      className="container"
      onMouseUp={props.mouseup}
      onMouseMove={props.mousemove}
    >
      <div className="panel editor">Editor</div>
      <div className="handler" onMouseDown={props.mousedown} />
      <div className="panel previewer">Previewer</div>
    </div>
  );
};

export default Panel;
