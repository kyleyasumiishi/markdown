import React from "react";

const Header = props => {
  return (
    <div className="header" onClick={props.clearDropdown}>
      <div className="header-left">
        <h1>Markdown Previewer</h1>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <button className="clear-btn" onClick={props.clearEditor}>
              Clear
            </button>
          </li>
          <li>
            <div className="dropdown">
              <button id="options-dropdown" className="dropdown-btn" href="#">
                Options
              </button>
              <div className="dropdown-content">
                <a
                  id="markdown-reference"
                  href="#"
                  onClick={props.selectOption}
                >
                  Markdown Reference
                </a>
                <a id="git-cheat-sheet" href="#" onClick={props.selectOption}>
                  Git Cheat Sheet
                </a>
                <a id="readme-template" href="#" onClick={props.selectOption}>
                  README template
                </a>
                <a id="project-readme" href="#" onClick={props.selectOption}>
                  This project's README
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button id="themes-dropdown" className="dropdown-btn" href="#">
                Themes
              </button>
              <div className="dropdown-content">
                <a id="default" href="#" onClick={props.selectTheme}>
                  Default
                </a>
                <a id="space" href="#" onClick={props.selectTheme}>
                  Space
                </a>
                <a id="dogs" href="#" onClick={props.selectTheme}>
                  Dogs
                </a>
                <a id="retro" href="#" onClick={props.selectTheme}>
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
