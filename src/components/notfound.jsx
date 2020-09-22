import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>Sorry! but you are lost, click below to reach home </div>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}

export default NotFound;
