import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class Enshu1Amain extends Component {
  constructor(props) {
    super(props);

    const data = [
      { id: 0, title: "メイン", detail: "メインコンテンツA" },
      { id: 1, title: "サブ1", detail: "サブコンテンツA1" },
      { id: 2, title: "サブ2", detail: "サブコンテンツA2" },
    ];
    this.state = { data: data };
  }
  render() {
    const list = this.state.data.map((data) => {
      return (
        <div key={data.id}>
          <Link to={"/A/sub" + data.id} className="item">
            {data.title}
          </Link>
        </div>
      );
    });

    return (
      <Tabs>
        <TabList>
          <Tab>
            <Link to="/A">メイン</Link>
          </Tab>
          <Tab>
            <Link to="/A/sub1">サブ1</Link>
          </Tab>
          <Tab>
            <Link to="/A/sub2">サブ2</Link>
          </Tab>
        </TabList>
        <TabPanel>
          <h2>メインコンテンツA</h2>
        </TabPanel>
        <TabPanel>
          <h2>サブコンテンツA1</h2>
        </TabPanel>
        <TabPanel>
          <h2>サブコンテンツA2</h2>
        </TabPanel>
      </Tabs>

      //   <main className="top-main-container">
      //     <div className="data-container">
      //       <div className="tabmenu">{list}</div>
      //       <div className="tabmain">{}</div>
      //     </div>
      //   </main>
    );
  }
}
export default Enshu1Amain;
