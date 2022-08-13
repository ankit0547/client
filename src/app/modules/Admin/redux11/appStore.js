import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";

import rootReducer from "./rootReducer";
import AppRootSaga from "../sagas/appRootSaga";
import { getEnvironment } from "../utils/utils";

const sagaMiddleware = createSagaMiddleware();
const Env = getEnvironment();

export const appStore = true
  ? createStore(
      rootReducer,
      composeWithDevTools(
        applyMiddleware(sagaMiddleware)
        // other store enhancers if any
      )
    )
  : createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(AppRootSaga);

export default appStore;
