import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import YearView from "./pages/YearView";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={YearView} />
          <Route ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
