import React, { Component } from "react";
import "../../css/App.css";
import PanelContainer from "../containers/PanelContainer";
import HeaderContainer from "../containers/HeaderContainer";

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
