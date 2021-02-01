import React, { Component } from "react";
import BoardTop from "./BoardTop";
import Post from "./Post";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class BoardWrapper extends Component {
  constructor(props) {
    super(props);
    const data = [
      { id: 0, title: "declare", date: "2021/04/01 00:00", detail: "im taro" },
      { id: 1, title: "タイトル3", date: "2021/02/02 00:00", detail: "詳細1" },
      { id: 2, title: "タイトル2", date: "2021/03/03 00:00", detail: "詳細2" },
    ];
    this.state = { data: data, mystate: null };
    console.log(this.state);
  }

  handleSortByAscend(key) {
    const line = this.state.data.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    this.setState({
      data: line,
    });
  }

  sortbytime(list) {
    list.sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }
      return 0;
    });
  }

  handleFilterVal(val) {
    // JavaScriptのfilter()メソッドで絞り込み、絞り込んだ配列をline変数に格納
    const line = this.props.data.filter(
      (item) =>
        // idまたはnameにキーワードが含まれていればtrueを返す
        item.id.toString().indexOf(val) >= 0 ||
        item.name.toLowerCase().indexOf(val) >= 0
    );
    // setStateを実行
    this.setState({
      data: line,
    });
  }

  updateState(state) {
    this.setState(state);
  }

  newPost(data) {
    this.setState((prevState) => {
      prevState.data[data.id] = data;

      return { data: prevState.data };
    });
  }

  render() {
    // this.sortbytime(this.state.data);
    console.log("oya" + JSON.stringify(this.state));
    // this.setState(this.data);

    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/Post"
            render={() => (
              <Post data={this.state.data} onUpdate={this.newPost.bind(this)} />
            )}
          />
          <Route
            path="/"
            render={() => (
              <BoardTop
                data={this.state.data}
                updateState={this.updateState.bind(this)}
                onSortByAscend={this.handleSortByAscend.bind(this)}
                // onFilterVal={this.handleFilterVal.bind(this)}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default BoardWrapper;
