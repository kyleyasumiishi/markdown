import React from "react";

const Header = props => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>Markdown Previewer</h1>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <button className="clear-btn" onClick={props.onclear}>
              Clear
            </button>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={props.onbuttonclick}
                href="#"
              >
                Options
              </button>
              <div className="dropdown-content">
                <a
                  id="markdown-reference"
                  href="#"
                  onClick={props.onselectoption}
                >
                  Markdown Reference
                </a>
                <a id="git-cheat-sheet" href="#" onClick={props.onselectoption}>
                  Git Cheat Sheet
                </a>
                <a id="readme-template" href="#" onClick={props.onselectoption}>
                  README template
                </a>
                <a id="project-readme" href="#" onClick={props.onselectoption}>
                  This project's README
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button
                className="dropdown-btn"
                onClick={props.onbuttonclick}
                href="#"
              >
                Themes
              </button>
              <div className="dropdown-content">
                <a href="#">Default</a>
                <a href="#">Space</a>
                <a href="#">Dogs</a>
                <a href="#">Retro</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
