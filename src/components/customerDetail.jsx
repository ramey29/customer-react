import React, { Component } from "react";
import "../css/detail.css";

//stateless functional component

class CustomerDetail extends Component {
  state = {};
  renderAddress() {
    if (
      this.props.selectedCustomer[0] &&
      this.props.selectedCustomer[0].address == null
    ) {
      return (
        <div className="no-detail">
          There is no address available for{" "}
          {this.props.selectedCustomer[0].name.toUpperCase()}
        </div>
      );
    }

    return this.props.selectedCustomer.map((c) => (
      <div className="detail" key={c._id}>
        <div>Name: {c.name.toUpperCase()}</div>
        {c.address.map((a, index) => (
          <div key={a._id}>
            Address {index + 1} :<span>Street: {a.street}, </span>
            <span>City: {a.city}, </span>
            <span>State: {a.state}, </span>
            <span>
              Country: {a.country} - {a.zip},
            </span>
          </div>
        ))}
      </div>
    ));
  }
  render() {
    return <React.Fragment>{this.renderAddress()}</React.Fragment>;
  }
}

export default CustomerDetail;
