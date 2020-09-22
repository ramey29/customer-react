import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>Welcome to customer Module</div>
        <div>
          <Link to="/customer">Customers</Link>
        </div>
      </div>
    );
  }
}

export default Home;
