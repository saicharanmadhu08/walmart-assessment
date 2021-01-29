import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import initialState from "state/initialState";
import rootReducer from "state/rootReducer";

export default function configureStore() {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
