import "./css/index.css";
import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom";

// 冲突main
ReactDOM.render(<h1><a href="/IndexPage">main</a></h1>, document.getElementById("root"));
