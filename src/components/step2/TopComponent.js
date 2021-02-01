import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import TopMainComponent from "./TopMainComponent";
import FooterComponent from "./FooterComponent";

class TopComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <TopMainComponent data={this.props.data} />
        <FooterComponent />
      </div>
    );
  }
}
export default TopComponent;
