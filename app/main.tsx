import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import App from "./components/App";
import Learnings from "./components/Learnings";

const render = () => {
  ReactDOM.render(
    <Router>
      <div>
        <Route exact={true} path="/" component={App} />
        <Route path="/learnings" component={Learnings} />
      </div>
    </Router>,
    document.getElementById("app"),
  );
};

render();
