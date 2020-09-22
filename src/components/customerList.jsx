import React, { Component } from "react";
import "../css/table.css";
import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate.js";

class CustomerList extends Component {
  state = { pageSize: 5, currentPage: 1 };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const customers = paginate(
      this.props.customers,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c._id} onClick={() => this.props.onSelect(c._id)}>
                <td>{c.name.toUpperCase()}</td>
                <td>{c.age}</td>
                <td>{c.isActive ? "Active" : "Inactive"}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={this.props.customers.length}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
      </React.Fragment>
    );
  }
}

export default CustomerList;
