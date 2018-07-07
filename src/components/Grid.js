import React from "react";
import "./Grid.css";

const Grid = props => {
  return (
    <div className="container">
      <h1 className="title">Markdown Previewer</h1>
      <div className="editor">Editor</div>
      <div className="previewer">Previewer</div>
    </div>
  );
};

export default Grid;
