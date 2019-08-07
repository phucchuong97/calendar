import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import "./css/date.css";
import YearView from "./pages/YearView";
import MonthView from "./pages/MonthView";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={YearView} />
          <Route path="/month/:year/:month" component={MonthView}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
