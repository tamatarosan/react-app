import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class SortPosts extends Component {
  constructor(props) {
    super(props);
    this.state = { mystate: null };
  }
  sortruleset(e) {
    console.log(e.target.innerText + "dayo");
    // console.log(this.state);
    this.setState({ mystate: e.target.innerText });
    // this.setState({ mystate: e.target.innerText });
    // console.log(this.state);
    this.props.updateState(this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <NavLink to="/sortbytime" onClick={this.sortruleset.bind(this)}>
          投稿時間
        </NavLink>
        <NavLink to="/sortbytitle" onClick={this.sortruleset.bind(this)}>
          タイトル
        </NavLink>
      </div>
    );
  }
}
export default SortPosts;
