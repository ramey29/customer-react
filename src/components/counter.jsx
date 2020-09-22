import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    itemList: ["one", "two", "three"],
  };
  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        <img
          className={this.getImageClass()}
          src={this.state.imageUrl}
          alt=""
        />
        <span style={this.styles} className="count">
          {this.formatCount()}
        </span>
        <button onClick={this.handleIncrement} style={{ fontSize: 20 }}>
          Increment
        </button>
        {this.renderList()}
        {this.state.itemList.length > 0 && <span>list exist</span>}
      </React.Fragment>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log("increment by 1", this);
  };

  getImageClass() {
    return this.state.count === 0 ? "zeroclass" : "nonzeroclass";
  }

  renderList() {
    return this.state.itemList.length === 0 ? (
      <p1>please add tags</p1>
    ) : (
      <ul>
        {this.state.itemList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
