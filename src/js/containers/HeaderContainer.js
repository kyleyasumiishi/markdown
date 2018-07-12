import React, { Component } from "react";
import Header from "../components/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectOption } from "../actions/selectOption";
import { clear } from "../actions/clear";
import {
  selectDefault,
  selectSpace,
  selectDog,
  selectRetro
} from "../../css/rootVar";
import { onClick } from "./onClick";

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.changeTheme = this.changeTheme.bind(this);
    this.click = this.click.bind(this);
  }

  changeTheme(event) {
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

  click(event) {
    onClick(event);
  }

  render() {
    return (
      <div>
        <Header
          onselectoption={this.props.selectOption}
          onclear={this.props.clearEditor}
          onchangetheme={this.changeTheme}
          click={this.click}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectOption: selectOption,
      clearEditor: clear
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(HeaderContainer);
