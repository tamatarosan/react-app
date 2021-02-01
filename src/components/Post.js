import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import { withRouter } from "react-router-dom";

class Post extends Component {
  nowattr() {
    this.now = new Date();
    console.log(this.now.getMonth());
    this.time = `${this.now.getFullYear()}/${`${`0${
      this.now.getMonth() + 1
    }`.slice(-2)}`}/${`${`0${this.now.getDate()}`.slice(
      -2
    )}`} ${`${`0${this.now.getHours()}`.slice(
      -2
    )}:${`0${this.now.getMinutes()}`.slice(
      -2
    )}:${`0${this.now.getSeconds()}`.slice(-2)}`}`;
    return this.time;
  }

  newPost(event) {
    event.preventDefault();
    if (this.title.value != "" && this.detail.value != "") {
      this.nowattr();
      this.props.onUpdate({
        id: this.props.data.length,
        title: this.title.value,
        date: this.time,
        detail: this.detail.value,
      });
      console.log(this.props.data);
      this.props.history.push("/");
    } else {
      this.props.history.push("/Post");
    }
  }
  render() {
    // const data = this.props.data.filter(
    //   (element) => element.id == this.props.match.params.id
    // )[0];

    return (
      <div>
        <HeaderComponent />
        <main className="detail-main-container">
          <dl className="detail-main-list">
            <dt>タイトル</dt>
            <dd>
              <input
                type="text"
                ref={(title) => {
                  this.title = title;
                }}
              />
            </dd>
            <dt>詳細</dt>
            <dd>
              <textarea
                ref={(detail) => {
                  this.detail = detail;
                }}
              ></textarea>
            </dd>
          </dl>
          <ul className="detail-command-container">
            <li>
              <a href="#" onClick={this.newPost.bind(this)}>
                送信
              </a>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}
export default withRouter(Post);
