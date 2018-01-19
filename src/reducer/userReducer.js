import * as types from "../action/actionTypes";

export default function userReducer(state = 0, action) {
  switch (action.type) {
    case types.CHANGE_NAME:
      return { ...state, name: action.name };
    default:
      return state;
  }
}
