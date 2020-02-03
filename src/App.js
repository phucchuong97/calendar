import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import YearView from "./pages/Year";
import MonthView from "./pages/Month";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/year/:year?" exact component={YearView} />
          <Route path="/:year?/:month?" component={MonthView}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
