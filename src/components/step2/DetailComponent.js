import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import DetailMainComponent from "./DetailMainComponent";
import FooterComponent from "./FooterComponent";
import { withRouter } from "react-router-dom";

class DetailComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <DetailMainComponent
          data={this.props.data}
          onUpdate={this.props.onUpdate.bind(this)}
        />
        <FooterComponent />
      </div>
    );
  }
}
export default DetailComponent;
