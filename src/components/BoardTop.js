import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import BTopMain from "./BTopMain";
class BoardTop extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BTopMain
          data={this.props.data}
          // onFilterVal={this.props.handleFilterVal.bind(this)}
        />
      </div>
    );
  }
}
export default BoardTop;
