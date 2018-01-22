import React, { Component } from "react";
//import CreateTodo from './create-todo';
import TodosList from "./todos-list";
import Conuter from "./counter";
//import HelloMessage from './HelloMessage';

/*const todos = [
    {
        task: 'make React tutorial',
        isCompleted: false
    },
    {
        task: 'eat dinner',
        isCompleted: true
    }
];*/
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>MyTodoList</h1>
        <Conuter initialCount={0} />
        <TodosList />
      </div>
    );
  }
}

//<HelloMessage name="foo" />
//<HelloMessage name={this.state.pos} delegate={this.onChangeByHelloMessage} />
/*handleChange = (e) => {
    this.setState({
        items: e.target.value,
    })
}*/
