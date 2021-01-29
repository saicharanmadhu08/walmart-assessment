// test-utils.js
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../configureStore";

const TestProvider = ({ store, children }: any) => (
  <Provider store={store}>{children}</Provider>
);

export function testRender(ui: any, { store }: any) {
  return rtlRender(<TestProvider store={store}>{ui}</TestProvider>);
}

export function makeTestStore() {
  const store = configureStore();
  return store;
}
