import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HeaderComponent extends Component {
  render() {
    return (
      <header className="header-container">
        <NavLink to="/" exact>
          一覧
        </NavLink>
        <NavLink to="/Post" exact>
          投稿
        </NavLink>
      </header>
    );
  }
}
export default HeaderComponent;
