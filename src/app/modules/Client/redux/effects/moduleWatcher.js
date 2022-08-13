import { call, put, takeEvery } from "redux-saga/effects";
import { clientTypes } from "../actions/clientTypes";
import * as api from "../../../../common/api/Api";
import { setUsersDetails } from "../actions/clientActions";
import { setAppLoader } from "../../../../common/redux/commonActions/commonActions";
import sentToastMessage from "../../../../common/Toast/Toast";

function* getUsers() {
  console.log("Client watcher !");
  try {
    yield put(setAppLoader(true));
    const result = yield call(api.getUsers);
    yield put(setUsersDetails(result.data));
    yield put(setAppLoader(false));
  } catch (error) {
    console.log(error.message);
    sentToastMessage({ type: "error", message: error.message });
  }
}

function* moduleWatcher() {
  yield takeEvery(clientTypes.GET_USERS, getUsers);
}

export default moduleWatcher;
