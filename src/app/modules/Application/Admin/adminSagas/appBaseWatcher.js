import { takeEvery, put } from "redux-saga/effects";
import { commonTypes } from "../redux/commonTypes";
import { appLoadedSuccessfully } from "../redux/commonActions";

// export function* perFormAppLoadedSideEffectDemo() {
//   yield put(appLoadedSuccessfully());
// }

function* applicationBaseWatcher() {
  // yield takeEvery(
  //   commonTypes.APPLICATION_LOAD_REQ,
  //   perFormAppLoadedSideEffectDemo
  // );
}

export default applicationBaseWatcher;
