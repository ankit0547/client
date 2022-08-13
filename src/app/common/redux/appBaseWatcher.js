import { takeEvery, put } from "redux-saga/effects";
import { commonTypes } from "./commonTypes/commonTypes";

export function* perFormAppLoadedSideEffectDemo() {
  yield put();
}

function* applicationBaseWatcher() {
  // yield takeEvery(commonTypes.APP_LOADED,);
}

export default applicationBaseWatcher;
