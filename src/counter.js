import React, { Component } from "react";
import { createStore, combineReducers } from "redux";

const INCRMENT = "INCRMENT";
const DECRMENT = "DECRMENT";
const CHANGE_NAME = "CHANGE_NAME";

function countReducer(state = 0, action) {
  switch (action.type) {
    case INCRMENT:
      return state + 1;
    case DECRMENT:
      return state - 1;
    default:
      return state;
  }
}
function userReducer(state = 0, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  user: userReducer,
  count: countReducer
});
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({
  type: "INCRMENT"
});
store.dispatch({
  type: "CHANGE_NAME",
  name: "alex"
});
store.dispatch({
  type: "DECRMENT"
});
store.dispatch({
  type: "CHANGE_NAME",
  name: "alen"
});

export default class counter extends Component {
  render() {
    return (
      <div>
        <ul>
          <button>+</button>
          <button>-</button>
        </ul>
      </div>
    );
  }
}
