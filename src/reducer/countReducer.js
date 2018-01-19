import * as types from "../action/actionTypes";

export default function countReducer(state = 0, action) {
  switch (action.type) {
    case types.INCRMENT:
      return state + 1;
    case types.DECRMENT:
      return state - 1;
    default:
      return state;
  }
}
