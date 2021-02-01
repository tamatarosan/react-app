import React, { Component } from "react";
import SearchPosts from "./SearchPosts";
import SortPosts from "./SortPosts";
import { Link } from "react-router-dom";

class BTopMain extends Component {
  render() {
    const list = this.props.data.map((data) => {
      return (
        <li key={data.id}>
          <div className="posts">
            <h4>{data.title}</h4>
            <h5>{data.date}</h5>
            <h6>{data.detail}</h6>
          </div>
        </li>
      );
    });
    return (
      <main className="top-main-container">
        <SearchPosts
          data={this.props.data}
          // onFilterVal={this.handleFilterVal.bind(this)}
        />
        <SortPosts data={this.props.data} />

        <ul className="data-container">{list}</ul>
      </main>
    );
  }
}
export default BTopMain;
