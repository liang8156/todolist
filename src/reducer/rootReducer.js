import { combineReducers } from "redux";
import countReducer from "./countReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  count: countReducer
});

export default rootReducer;
