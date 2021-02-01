import React, { Component } from "react";

class BTopMain extends Component {
  constructor(props) {
    super(props);
    this.state = { mystate: null };
  }

  updateState(state) {
    this.setState(state);
    this.props.updateState(state);
    console.log("BoardTop" + JSON.stringify(this.state));
  }

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
    return <ul className="data-container">{list}</ul>;
  }
}
export default BTopMain;
