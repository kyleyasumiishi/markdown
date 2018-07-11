import React, { Component } from "react";
import Header from "../components/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectOption } from "../actions/selectOption";

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

  render() {
    return (
      <div>
        <Header
          onbuttonclick={this.handleButtonClick}
          onselectoption={this.props.handleOptionSelect}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      handleOptionSelect: selectOption
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(HeaderContainer);
