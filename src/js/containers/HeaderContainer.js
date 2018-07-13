import React, { Component } from "react";
import Header from "../components/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectOption } from "../actions/selectOption";
import { clearEditor } from "../actions/clearEditor";
import {
  selectDefault,
  selectSpace,
  selectDog,
  selectRetro
} from "../../css/rootVar";
import { setDropdownVisibility } from "./setDropdownVisibility";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.selectTheme = this.selectTheme.bind(this);
    this.clearDropdown = this.clearDropdown.bind(this);
  }

  selectTheme(event) {
    switch (event.target.id) {
      case "default":
        selectDefault();
        break;
      case "space":
        selectSpace();
        break;
      case "dogs":
        selectDog();
        break;
      case "retro":
        selectRetro();
        break;
      default:
        break;
    }
  }

  clearDropdown(event) {
    setDropdownVisibility(event);
  }

  render() {
    return (
      <div>
        <Header
          clearEditor={this.props.clearEditor}
          selectOption={this.props.selectOption}
          selectTheme={this.selectTheme}
          clearDropdown={this.clearDropdown}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectOption: selectOption,
      clearEditor: clearEditor
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(HeaderContainer);
