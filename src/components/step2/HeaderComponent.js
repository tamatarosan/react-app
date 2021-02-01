import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
  render() {
    return (
      <header className="header-container">
        <Link to="/A">ページA　</Link>
        <Link to="/B">ページB</Link>
      </header>
    );
  }
}
export default HeaderComponent;
