import React, { Component } from "react";
import BoardTop from "./BoardTop";
import Post from "./Post";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class BoardWrapper extends Component {
  constructor(props) {
    super(props);

    const data = [
      { id: 0, title: "declare", date: "2020/04/01 00:00", detail: "im taro" },
      { id: 1, title: "タイトル1", date: "2020/02/02 00:00", detail: "詳細1" },
      { id: 2, title: "タイトル2", date: "2020/03/03 00:00", detail: "詳細2" },
    ];
    this.state = { data: data };
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

  update(data) {
    this.setState((prevState) => {
      prevState.data[data.id] = data;

      return { data: prevState.data };
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/Post"
            render={() => (
              <Post data={this.state.data} onUpdate={this.update.bind(this)} />
            )}
          />
          <Route
            path="/"
            render={() => (
              <BoardTop
                data={this.state.data}
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
