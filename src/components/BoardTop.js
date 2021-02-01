import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import BTopMain from "./BTopMain";
import SearchPosts from "./SearchPosts";
import { NavLink } from "react-router-dom";
class BoardTop extends Component {
  constructor(props) {
    super(props);
    this.state = { mystate: null };
  }

  updateState(state) {
    this.setState(state);
    this.props.updateState(state);
  }

  _sortByAscend(e) {
    e.preventDefault();
    // button要素に設定したvalue値を引数にセットし、handleSortByAscend()メソッドを実行
    this.props.onsortByAscend(e.target.value);
  }

  sortruleset(e) {
    console.log(e.target.innerText + "dayo");
    this.setState({ mystate: e.target.innerText });
    this.props.updateState(this.state);
  }

  render() {
    return (
      <div>
        <HeaderComponent />

        <main className="top-main-container">
          <SearchPosts
            data={this.props.data}
            updateState={this.updateState.bind(this)}
          />

          <div>
            <NavLink
              to="/sortbytime"
              onClick={() => this._SortByAscend}
              value="date"
            >
              投稿時間
            </NavLink>
            <NavLink
              to="/sortbytitle"
              onClick={() => this._SortByAscend}
              value="title"
            >
              タイトル
            </NavLink>
          </div>
          <BTopMain
            data={this.props.data}
            updateState={this.updateState.bind(this)}
            // onFilterVal={this.props.handleFilterVal.bind(this)}
          />
        </main>
      </div>
    );
  }
}
export default BoardTop;
