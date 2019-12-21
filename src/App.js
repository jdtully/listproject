import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import PaginatedList from "./components/axios.list.controller";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { EditUser } from "./components/editUser";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <div className="container">
            <Route path="/users/:id" component={EditUser} />
            <Route path="/users/" exact component={PaginatedList} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
