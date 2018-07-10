import React, { Component } from "react";
import Header from "../components/Header";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    if (event.target.className === "dropdown-btn") {
      const dropdownContent = event.target.parentNode.querySelector(
        ".dropdown-content"
      );
      if (
        dropdownContent.style.display === "" ||
        dropdownContent.style.display === "none"
      ) {
        dropdownContent.style.display = "block";
      } else {
        dropdownContent.style.display = "none";
      }
    }
  }

  // // When user chooses an Option or Theme
  // handleOnClick(event) {

  // }

  render() {
    return (
      <div>
        <Header onbuttonclick={this.handleButtonClick} />
      </div>
    );
  }
}

export default HeaderContainer;
