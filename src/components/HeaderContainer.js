import React, { Component } from "react";
import Header from "./Header";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default HeaderContainer;
