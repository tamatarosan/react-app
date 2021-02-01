import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchPosts extends Component {
  render() {
    return (
      <div>
        <input type="text" name="" id="" />
        <Link to="/" className="searchbutton">
          検索
        </Link>
      </div>
    );
  }
}
export default SearchPosts;
