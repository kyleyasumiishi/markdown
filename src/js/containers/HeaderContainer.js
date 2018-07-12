import React, { Component } from "react";
import Header from "../components/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectOption } from "../actions/selectOption";
import { clear } from "../actions/clear";
import { selectDefault, selectSpace } from "../../css/rootVar";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
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

  changeTheme(event) {
    switch (event.target.id) {
      case "default":
        console.log("default");
        selectDefault();
        break;
      case "space":
        console.log("space");
        selectSpace();
        break;
      case "dogs":
        console.log("dogs");
        break;
      case "retro":
        console.log("retro");
        break;
      default:
        console.log("default");
        break;
    }
  }

  render() {
    return (
      <div>
        <Header
          onbuttonclick={this.handleButtonClick}
          onselectoption={this.props.handleOptionSelect}
          onclear={this.props.clearEditor}
          onchangetheme={this.changeTheme}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleOptionSelect: selectOption,
      clearEditor: clear
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(HeaderContainer);
