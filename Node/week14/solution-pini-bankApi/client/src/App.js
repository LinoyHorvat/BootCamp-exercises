import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Users from "./components/Users.component";
import Bank from "./components/Bank.component";

const App = () => {
  return (
    <div>
      <Router>
        <h1>BANK API</h1>
        <h3>
          <Link to="/users">Users</Link>
        </h3>
        <h3>
          <Link to="/bank">Bank</Link>
        </h3>
        <Route exact path="/users" component={Users} />
        <Route exact path="/bank" component={Bank} />
      </Router>
    </div>
  );
};

export default App;
