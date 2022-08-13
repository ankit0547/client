import { all } from "redux-saga/effects";
import ApplicationBaseWatcher from "../app/common/redux/appBaseWatcher";
import { clientWatcher } from "../app/modules/Client";
import { adminWatcher } from "../app/modules/Admin";

export default function* AppRootSaga() {
  yield all([ApplicationBaseWatcher(), clientWatcher(), adminWatcher()]);
}
