import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Customer from "./components/customer.jsx";
import Home from "./components/home.jsx";
import NotFound from "./components/notfound.jsx";
import "./css/reset.css";

function App() {
  return (
    <div>
      <Switch>
        <Route
          path="/customer"
          render={(props) => <Customer additionalProps="addprop" {...props} />}
        />
        <Route path="/not-found" exact component={NotFound} />
        <Route path="/" exact component={Home} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
