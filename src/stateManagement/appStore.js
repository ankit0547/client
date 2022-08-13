import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";

import AppRootReducer from "./rootReducer";
import AppRootSaga from "./appRootSaga";
import { getEnvironment } from "../utils/utils";

const sagaMiddleware = createSagaMiddleware();
const Env = getEnvironment();

export const appStore = true
  ? createStore(
      AppRootReducer,
      composeWithDevTools(
        applyMiddleware(sagaMiddleware)
        // other store enhancers if any
      )
    )
  : createStore(AppRootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(AppRootSaga);

export default appStore;
