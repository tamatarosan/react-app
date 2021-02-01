import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopMainComponent extends Component {
  render() {
    const list = this.props.data.map((data) => {
      return (
        <li key={data.id}>
          <Link to={"/detail/" + data.id}>{data.title}</Link>
        </li>
      );
    });
    return (
      <main className="top-main-container">
        <ul className="data-container">{list}</ul>
      </main>
    );
  }
}
export default TopMainComponent;
