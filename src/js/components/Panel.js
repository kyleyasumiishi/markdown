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
          // onChange={event => {
          //   props.onchange(event);
          //   props.output();
          // }}
          onChange={props.onchange}
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
