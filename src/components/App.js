import React, { Component } from "react";
import "./App.css";
import PanelContainer from "./PanelContainer";
import HeaderContainer from "./HeaderContainer";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <PanelContainer />
      </div>
    );
  }
}

export default App;
