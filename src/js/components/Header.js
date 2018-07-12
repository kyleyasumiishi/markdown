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
                <a id="default" href="#" onClick={props.onchangetheme}>
                  Default
                </a>
                <a id="space" href="#" onClick={props.onchangetheme}>
                  Space
                </a>
                <a id="dogs" href="#" onClick={props.onchangetheme}>
                  Dogs
                </a>
                <a id="retro" href="#" onClick={props.onchangetheme}>
                  Retro
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
