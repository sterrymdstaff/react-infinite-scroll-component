import React from "react";
import ReactDOM from "react-dom";

import InfiniteScroll from "../app";

const style = {
  display: "flex",
  alignItems: "center",
  fontSize: 40
};

const divs = [
  <tr key={1} style={{ height: 200, background: "#9bc95b", ...style }}>
    <td>tr no 1</td>
  </tr>,
  <tr key={2} style={{ height: 200, background: "#ffd47b", ...style }}>
    <td>tr no 2</td>
  </tr>,
  <tr key={3} style={{ height: 200, background: "#95a9d6", ...style }}>
    <td>tr no 3</td>
  </tr>,
  <tr key={4} style={{ height: 200, background: "#ffa8e1", ...style }}>
    <td>tr no 4</td>
  </tr>,
  <tr key={5} style={{ height: 200, background: "#9bc95b", ...style }}>
    <td>tr no 5</td>
  </tr>,
  <tr key={6} style={{ height: 200, background: "#ffd47b", ...style }}>
    <td>tr no 6</td>
  </tr>,
  <tr key={7} style={{ height: 200, background: "#95a9d6", ...style }}>
    <td>tr no 7</td>
  </tr>,
  <tr key={8} style={{ height: 200, background: "#ffa8e1", ...style }}>
    <td>tr no 8</td>
  </tr>
];

const heightMessage = "Infinite Scroll given fixed height of 300px in props";
const colors = ["#9bc95b", "#ffd47b", "#95a9d6", "#ffa8e1"];

export default class Height extends React.Component {
  constructor() {
    super();
    this.state = { divs: divs };
    this.generateDivs = this.generateDivs.bind(this);
  }

  generateDivs() {
    let moreDivs = [];
    let count = this.state.divs.length;
    for (let i = 0; i < 30; i++) {
      moreDivs.push(
        <tr
          key={"div" + count++}
          style={{ height: 200, background: colors[i % 4], ...style }}
        >
          <td>Div no {count}</td>
        </tr>
      );
    }
    setTimeout(() => {
      this.setState({ divs: this.state.divs.concat(moreDivs) });
    }, 500);
  }

  render() {
    return (
      <div>
        <h3>{heightMessage}</h3>
        <table>
          <InfiniteScroll
            next={this.generateDivs}
            hasMore={true}
            height={300}
            containerElement="tbody"
            loader={
              <tr>
                <td>Loading...</td>
              </tr>
            }
          >
            {this.state.divs}
          </InfiniteScroll>
        </table>
      </div>
    );
  }
}
