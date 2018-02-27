import React from "react";
import ReactDOM from "react-dom";

import Height from "./height";
import Table from "./Table";
import NoHeight from "./no-height";

const buttonStyle = {
  padding: 10,
  margin: 10,
  cursor: "pointer"
};

const renderNoHeight = () => {
  const appEl = document.getElementById("app");
  appEl.innerHTML = "";
  appEl.style.height = "";
  ReactDOM.render(<NoHeight />, document.getElementById("app"));
};

const renderHeight = () => {
  const appEl = document.getElementById("app");
  appEl.innerHTML = "";
  appEl.style.height = "";
  ReactDOM.render(<Height />, document.getElementById("app"));
};

const renderTable = () => {
  const appEl = document.getElementById("app");
  appEl.innerHTML = "";
  appEl.style.height = "";
  ReactDOM.render(<Table />, document.getElementById("app"));
};

ReactDOM.render(
  <div>
    <button
      onClick={renderNoHeight}
      onTouchStart={renderNoHeight}
      style={buttonStyle}
    >
      Body scroll, no height, like Facebook timeline!
    </button>
    <button
      onClick={renderTable}
      onTouchStart={renderTable}
      style={buttonStyle}
    >
      Fixed container table
    </button>
    <button
      onClick={renderHeight}
      onTouchStart={renderHeight}
      style={buttonStyle}
    >
      Fixed container height
    </button>
  </div>,
  document.getElementById("button")
);

// initial render
ReactDOM.render(<Table />, document.getElementById("app"));
