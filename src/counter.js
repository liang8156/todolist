import React, { Component } from "react";
import PropTypes from "prop-types";

export default class counter extends Component {
  static contextTypes = {
    store: PropTypes.object
  };
  static propTypes = {
    initialCount: PropTypes.number.isRequired
  };
  constructor(props) {
    super(props);
    this.state = { count: this.props.initialCount };
  }
  onIncrement = e => {
    console.log("increment");
    this.context.store.dispatch({ type: "INCREMENT" });
    this.setState({
      count: this.context.store.getState().count
    });
  };
  onDecrement = e => {
    console.log("decrement");
    this.context.store.dispatch({ type: "DECREMENT" });
    this.setState({
      count: this.context.store.getState().count
    });
  };
  render() {
    return (
      <div>
        <ul>
          <h2> {this.state.count}</h2>
          <button onClick={this.onIncrement}>+</button>
          <button onClick={this.onDecrement}>-</button>
        </ul>
      </div>
    );
  }
}
