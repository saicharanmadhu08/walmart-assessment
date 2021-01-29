import configureStore, { MockStore } from "redux-mock-store";
import thunk from "redux-thunk";
import initialState from "../state/initialState";
export function createMockStore(items?: any): MockStore {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;
  if (!items) {
    store = mockStore({ ...initialState });
  } else {
    store = mockStore({ ...initialState, ...items });
  }
  return store;
}
