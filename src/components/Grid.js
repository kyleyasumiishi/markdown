import React from "react";
import "./Grid.css";
import "./GridContainer";

const Grid = props => {
  return (
    <div>
      <h1 className="title">Markdown Previewer</h1>
      <div className="container">
        <div className="editor">Editor</div>
        <div
          onMouseDown={props.mousedown}
          onMouseMove={props.mousemove}
          onMouseUp={props.mouseup}
          className="handler"
        />
        <div className="previewer">Previewer</div>
      </div>
    </div>
  );
};

export default Grid;
