import React from "react";
import "./GridContainer";

const Grid = props => {
  return (
    <div>
      <h1 className="title">Markdown Previewer</h1>
      <div
        className="container"
        onMouseUp={props.mouseup}
        onMouseMove={props.mousemove}
      >
        <div className="panel editor">Editor</div>
        <div className="handler" onMouseDown={props.mousedown} />
        <div className="panel previewer">Previewer</div>
      </div>
    </div>
  );
};

export default Grid;
