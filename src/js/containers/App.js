import React, { Component } from "react";
import "../../css/App.css";
import PanelsContainer from "../containers/PanelsContainer";
import HeaderContainer from "../containers/HeaderContainer";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <PanelsContainer />
      </div>
    );
  }
}

export default App;