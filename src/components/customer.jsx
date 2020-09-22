import React, { Component } from "react";
import CustomerList from "./customerList.jsx";
import CustomerDetail from "./customerDetail.jsx";
import http from "../services/httpService";
import "../css/style.css";
const endPoint = "/customers";
class Customer extends Component {
  state = {
    customers: [],
    selectedCustomer: [],
    address: [],
  };

  async componentDidMount() {
    try {
      const { data } = await http.get(endPoint);
      this.setState({ customers: data });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        alert("Customer endpoint not found");
      }
    }
  }

  handleSelect = (customerID) => {
    console.log(customerID);
    const selectedCustomer = this.state.customers.filter((c) => {
      return c._id === customerID;
    });
    this.setState({ selectedCustomer: selectedCustomer });
  };
  render() {
    return (
      <div className="mainContainer">
        <div className="innerContainer">
          <CustomerList
            customers={this.state.customers}
            onSelect={this.handleSelect}
          />
        </div>
        <div className="innerContainer">
          <CustomerDetail selectedCustomer={this.state.selectedCustomer} />
        </div>
      </div>
    );
  }
}

export default Customer;
