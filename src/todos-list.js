import React, { Component } from "react";
//import TodosListItem from './todos-list-item';

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({ text: e.target.value });
  };
  //this.setState({ text: e.target.value, items: [] });
  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: [...prevState.items, newItem],
      text: ""
    }));
  };
  deleteTodo = id => e => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id)
    }));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
            placeholder="What needs to be done?"
          />
          <button>Add</button>
        </form>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>
              {item.text}
              <button onClick={this.deleteTodo(item.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
