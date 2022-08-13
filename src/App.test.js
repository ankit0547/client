/* eslint-disable testing-library/render-result-naming-convention */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import configureStore from "redux-mock-store"; //ES6 modules
import App from "./App";

const mockStore = configureStore();

const setUpApp = () => {
  const initialState = {
    ApplicationState: {
      loaded: false,
    },
  };
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      {/* <Router> */}
      <App />
      {/* </Router> */}
    </Provider>
  );
};

test("renders learn react link", () => {
  const component = setUpApp();
  expect(component).toBeDefined();
});
