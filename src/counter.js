import React, { Component } from "react";
import { createStore } from "redux";
import * as types from "./action/actionTypes";
import rootReducer from "./reducer/rootReducer";

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({
  type: types.INCRMENT
});
store.dispatch({
  type: types.CHANGE_NAME,
  name: "alex"
});
store.dispatch({
  type: types.DECRMENT
});
store.dispatch({
  type: types.CHANGE_NAME,
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
