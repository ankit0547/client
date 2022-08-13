/* eslint-disable testing-library/render-result-naming-convention */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Router } from "react-router-dom";
import configureStore from "redux-mock-store"; //ES6 modules
import Routing from "./Routing";

const mockStore = configureStore();

const setUpApp = () => {
  const initialState = {
    ApplicationState: {
      loaded: false,
    },
  };
  const store = mockStore(initialState);
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Routing />
      </Provider>
    </BrowserRouter>
  );
};

test("renders Routing links", () => {
  const component = setUpApp();
  expect(component).toBeTruthy();
});
