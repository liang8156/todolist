import { createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import { INCRMENT } from "./action/actionTypes";

it("store should be accessable", () => {
  const store = createStore(rootReducer);
  expect(store).toEqual(store);
});
it("initialize state of count should be 0", () => {
  const store = createStore(rootReducer);
  expect(store.getState().count).toEqual(0);
});
it('state of count should be 2 after receive action["INCREMENT"]', () => {
  const store = createStore(rootReducer);
  store.dispatch({ type: "INCREMENT" });
  expect(store.getState().count).toEqual(1);
});
it('state of count should be -1 after receive action["DECREMENT"]', () => {
  const store = createStore(rootReducer);
  store.dispatch({ type: "DECREMENT" });
  expect(store.getState().count).toEqual(-1);
});
