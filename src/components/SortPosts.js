import React, { Component } from "react";

import { Link, NavLink } from "react-router-dom";

class SortPosts extends Component {
  render() {
    return (
      <div>
        <NavLink to="/sortbytime" activeClassName="nowactive">
          投稿時間
        </NavLink>
        <NavLink to="/sortbytitle" activeClassName="nowactive">
          タイトル
        </NavLink>
      </div>
    );
  }
}
export default SortPosts;
