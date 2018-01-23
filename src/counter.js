import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Counter extends Component {
  static contextTypes = {
    store: PropTypes.object
  };
  static propTypes = {
    initialCount: PropTypes.number.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount,
      style: { color: "white" }
    };
  }
  componentWillMount() {
    this.context.store.dispatch({
      type: "INIT",
      count: this.props.initialCount
    });
  }
  onIncrement = () => {
    console.log("increment");
    this.context.store.dispatch({ type: "INCREMENT" });
    this.setState({
      count: this.context.store.getState().count
    });
  };
  onDecrement = () => {
    console.log("decrement");
    this.context.store.dispatch({ type: "DECREMENT" });
    this.setState({
      count: this.context.store.getState().count
    });
  };
  onHover = e => {
    console.log("onHover");
    this.setState({
      style: { color: "red" }
    });
  };
  onHout = e => {
    console.log("onHout");
    this.setState({
      style: { color: "white" }
    });
  };
  render() {
    return (
      <div>
        <ul>
          <h2> {this.state.count}</h2>
          <button onClick={this.onIncrement}>+</button>
          <button onClick={this.onDecrement}>-</button>
          <span style={this.state.style}>aaaaaaa</span>
          <button onMouseOver={this.onHover} onMouseOut={this.onHout}>
            ----
          </button>
        </ul>
      </div>
    );
  }
}
